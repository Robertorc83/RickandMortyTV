const uploadVideo = (req, res, next) => {
  if(req.files.length > 0){
    const file = req.files[0];
    const YOUR_MAX_SIZE= 1073741824 //1GB
    
    if(file.size > YOUR_MAX_SIZE){
      return res.status(400).json({ error: 'File size is too large.' });
    }
    if(!['video/mp4', 'video/avi'].includes(file.mimetype)){
      return res.status(400).json({ error: 'Invalid file type. Only mp4 and avi are allowed.' });
    }
    res.send('Successfully uploaded ' + req.files.length + ' files!');
  }else{
    return res.status(400).json({ error: 'No file uploaded.' });
  }
};

module.exports = uploadVideo;