'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { TrashIcon, PlusIcon, LogOutIcon, PlayIcon } from 'lucide-react';
import { extractYouTubeVideoId, getYouTubeThumbnail } from '@/lib/youtube';

interface Video {
  _id: string;
  url: string;
  title?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function AdminVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newVideo, setNewVideo] = useState({ url: '', title: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  // Fetch videos on component mount
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/videos');
      const data = await response.json();

      if (data.success) {
        // If no videos in database, show the default video that's being used in public carousel
        if (data.videos.length === 0) {
          setVideos([{
            _id: 'default-fallback',
            url: 'https://www.youtube.com/embed/ODNXdRY84Ug',
            title: 'BridgeAfrica: Documenting Africa\'s Infrastructure Journey (Default)',
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }]);
        } else {
          setVideos(data.videos);
        }
      } else {
        setError('Failed to fetch videos');
      }
    } catch (error) {
      setError('Something went wrong while fetching videos');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Video added successfully!');
        setNewVideo({ url: '', title: '' });
        fetchVideos(); // Refresh the list
      } else {
        setError(data.message || 'Failed to add video');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    // Don't allow deletion of the default fallback video
    if (id === 'default-fallback') {
      setError('Cannot delete the default video. Add your own videos to replace it.');
      return;
    }

    if (!confirm('Are you sure you want to delete this video?')) {
      return;
    }

    try {
      const response = await fetch(`/api/videos/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Video deleted successfully!');
        fetchVideos(); // Refresh the list
      } else {
        setError(data.message || 'Failed to delete video');
      }
    } catch (error) {
      setError('Something went wrong while deleting video');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-[#0A2342] dark:text-white">
                Video Management
              </h1>
              <p className="mt-1 text-sm text-[#0A2342] dark:text-gray-300">
                Manage YouTube videos for the public carousel
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <LogOutIcon size={16} />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Video Form */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0A2342] dark:text-white mb-4 flex items-center gap-2">
            <PlusIcon size={20} />
            Add New Video
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#0A2342] dark:text-white mb-1">
                  YouTube URL *
                </label>
                <input
                  type="url"
                  value={newVideo.url}
                  onChange={(e) => {
                    setNewVideo({ ...newVideo, url: e.target.value });
                    clearMessages();
                  }}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-[#D0312D] focus:border-[#D0312D] dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#0A2342] dark:text-white mb-1">
                  Title (Optional)
                </label>
                <input
                  type="text"
                  value={newVideo.title}
                  onChange={(e) => {
                    setNewVideo({ ...newVideo, title: e.target.value });
                    clearMessages();
                  }}
                  placeholder="Video title for admin reference"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-[#D0312D] focus:border-[#D0312D] dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base text-white transition-all duration-300 hover:scale-105 bg-[#D0312D] hover:bg-[#B02A26] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <PlusIcon size={16} />
                {isSubmitting ? 'Adding...' : 'Add Video'}
              </button>
            </div>
          </form>
        </div>

        {/* Messages */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        {/* Videos List */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-[#0A2342] dark:text-white">
              Current Videos ({videos.length})
            </h2>
          </div>

          {isLoading ? (
            <div className="px-6 py-8 text-center">
              <div className="text-[#0A2342] dark:text-gray-300">Loading videos...</div>
            </div>
          ) : videos.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <PlayIcon size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-[#0A2342] dark:text-white mb-2">
                No videos yet
              </h3>
              <p className="text-[#0A2342] dark:text-gray-300">
                Add your first YouTube video to get started.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-slate-700">
              {videos.map((video, index) => {
                const videoId = extractYouTubeVideoId(video.url);
                const thumbnail = videoId ? getYouTubeThumbnail(videoId) : null;
                
                const isDefaultVideo = video._id === 'default-fallback';
                
                return (
                  <div key={video._id} className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      {/* Thumbnail */}
                      <div className="flex-shrink-0 relative">
                        {thumbnail ? (
                          <img
                            src={thumbnail}
                            alt={video.title || `Video ${index + 1}`}
                            className={`w-20 h-15 object-cover rounded ${isDefaultVideo ? 'ring-2 ring-[#F6BE00]' : ''}`}
                          />
                        ) : (
                          <div className={`w-20 h-15 bg-gray-200 dark:bg-slate-600 rounded flex items-center justify-center ${isDefaultVideo ? 'ring-2 ring-[#F6BE00]' : ''}`}>
                            <PlayIcon size={24} className="text-gray-400" />
                          </div>
                        )}
                        {isDefaultVideo && (
                          <div className="absolute -top-1 -right-1 bg-[#F6BE00] text-[#0A2342] text-xs font-bold px-1 rounded">
                            DEFAULT
                          </div>
                        )}
                      </div>
                      
                      {/* Video Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#0A2342] dark:text-white truncate">
                          {video.title || `Video ${index + 1}`}
                          {isDefaultVideo && (
                            <span className="ml-2 text-xs text-[#F6BE00] font-normal">
                              (Currently showing on public site)
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          Order: {video.order} • Added: {new Date(video.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                          {video.url}
                        </p>
                        {isDefaultVideo && (
                          <p className="text-xs text-[#0A2342] dark:text-gray-300 mt-1">
                            💡 Add your own videos to replace this default video
                          </p>
                        )}
                      </div>
                      
                      {/* Actions */}
                      <div className="flex-shrink-0">
                        {isDefaultVideo ? (
                          <div className="p-2 text-gray-400 cursor-not-allowed" title="Cannot delete default video">
                            <TrashIcon size={16} />
                          </div>
                        ) : (
                          <Button
                            onClick={() => handleDelete(video._id)}
                            variant="secondary"
                            className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <TrashIcon size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}