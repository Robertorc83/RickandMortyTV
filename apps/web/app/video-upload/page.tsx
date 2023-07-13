'use client'
import { Button, Input } from '@mui/material';
import { useRef } from 'react';
import axios from 'axios';
import styles from './VideoUpload.module.css';

function UploadVideo() {
  const fileInput = useRef<HTMLInputElement | null>(null);

  const uploadVideo = async () => {
    const file = fileInput?.current?.files[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3001/video/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully');
    } catch (err) {
      console.error('Error uploading file:', err);
    }
  };

  return (
    <div className={styles.container}>
      <Input type="file" inputRef={fileInput} />
      <Button variant="contained" color="primary" onClick={uploadVideo}>Upload</Button>
    </div>
  );
}

export default UploadVideo;