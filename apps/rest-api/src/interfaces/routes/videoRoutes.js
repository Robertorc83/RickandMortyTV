const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const videoService = require('../../infrastructure/services/videoService');
const videoController = require('../controllers/videoController');

const router = express.Router();

const upload = multer({
  storage: multerS3({
    s3: videoService.getS3(),
    bucket: process.env.UPLOAD_RAW_DATA_S3_BUCKET,
    key: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

router.post('/upload', upload.array('file',1), videoController.uploadVideo);
router.get('/getVideoUrl', videoController.getVideoUrl);

module.exports = router;