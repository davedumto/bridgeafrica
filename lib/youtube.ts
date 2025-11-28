/**
 * YouTube utility functions for URL processing and video ID extraction
 */

/**
 * Extracts YouTube video ID from various URL formats
 * @param url - YouTube URL in any format
 * @returns Video ID or null if invalid
 */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  
  return match ? match[1] : null;
}

/**
 * Converts any YouTube URL to embed format
 * @param url - YouTube URL
 * @returns Embed URL or null if invalid
 */
export function convertToEmbedUrl(url: string): string | null {
  const videoId = extractYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

/**
 * Validates if a URL is a valid YouTube URL
 * @param url - URL to validate
 * @returns Boolean indicating validity
 */
export function isValidYouTubeUrl(url: string): boolean {
  return extractYouTubeVideoId(url) !== null;
}

/**
 * Gets YouTube thumbnail URL from video ID
 * @param videoId - YouTube video ID
 * @returns Thumbnail URL
 */
export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}