const { getSignedUrl } = require('../../../infrastructure/services/videoService');

module.exports = async function(req, res, _next) {
  const fileKey = req.query.fileKey;
  if (!fileKey) {
    return res.status(400).json({ error: 'Missing fileKey parameter' });
  }
  
  try {
    const signedUrl = await getSignedUrl(fileKey);
    return res.json({ signedUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error generating signed URL', details: error.message });
  }
}