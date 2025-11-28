import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Video from '@/models/Video';
import { convertToEmbedUrl, isValidYouTubeUrl } from '@/lib/youtube';

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch all videos sorted by order
    const videos = await Video.find({}).sort({ order: 1 });

    return NextResponse.json(
      { 
        success: true, 
        videos 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch videos' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { url, title } = body;

    // Validate required fields
    if (!url) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Video URL is required' 
        },
        { status: 400 }
      );
    }

    // Validate YouTube URL
    if (!isValidYouTubeUrl(url)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid YouTube URL' 
        },
        { status: 400 }
      );
    }

    // Convert to embed URL format
    const embedUrl = convertToEmbedUrl(url);
    if (!embedUrl) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid YouTube URL format' 
        },
        { status: 400 }
      );
    }

    // Get the next order number
    const lastVideo = await Video.findOne({}).sort({ order: -1 });
    const nextOrder = lastVideo ? lastVideo.order + 1 : 1;

    // Create new video
    const video = new Video({
      url: embedUrl,
      title: title || 'Untitled Video',
      order: nextOrder
    });

    await video.save();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Video added successfully',
        video 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Error adding video:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { 
          success: false, 
          message: error.message 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to add video' 
      },
      { status: 500 }
    );
  }
}