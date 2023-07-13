import { useEffect, useState } from 'react';
import axios from 'axios';

export function useVideoUrl(fileKey: string) {
  const [videoUrl, setVideoUrl] = useState(null);
  
  useEffect(() => {
    async function fetchVideo() {
      const response = await axios.get(`http://localhost:3001/video/getVideoUrl?fileKey=${fileKey}`);
      setVideoUrl(response.data.signedUrl);
    }
    fetchVideo();
  }, [fileKey]);

  return videoUrl;
}