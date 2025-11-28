import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Video from '@/models/Video';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Video ID is required' 
        },
        { status: 400 }
      );
    }

    // Find and delete the video
    const deletedVideo = await Video.findByIdAndDelete(id);

    if (!deletedVideo) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Video not found' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Video deleted successfully' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error deleting video:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete video' 
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Video ID is required' 
        },
        { status: 400 }
      );
    }

    // Find and update the video
    const updatedVideo = await Video.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedVideo) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Video not found' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Video updated successfully',
        video: updatedVideo 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error updating video:', error);

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
        message: 'Failed to update video' 
      },
      { status: 500 }
    );
  }
}