import mongoose, { Document, Model } from 'mongoose';

export interface IVideo extends Document {
  url: string;
  title?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const VideoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'Video URL is required'],
    trim: true,
    validate: {
      validator: function(v: string) {
        // YouTube URL validation
        const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return youtubeRegex.test(v);
      },
      message: 'Please enter a valid YouTube URL'
    }
  },
  title: {
    type: String,
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  order: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

// Indexes for better performance
VideoSchema.index({ order: 1 });
VideoSchema.index({ createdAt: -1 });

const Video: Model<IVideo> = mongoose.models.Video || mongoose.model<IVideo>('Video', VideoSchema);

export default Video;