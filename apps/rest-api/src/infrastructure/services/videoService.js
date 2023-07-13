const { S3, GetObjectCommand } = require('@aws-sdk/client-s3'); // v3 SDK
const { S3RequestPresigner } = require("@aws-sdk/s3-request-presigner");
const { createRequest } = require("@aws-sdk/util-create-request");
const { formatUrl } = require("@aws-sdk/util-format-url");

const s3 = new S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

async function getSignedUrl(fileKey) {
    const getReq = await createRequest(s3, new GetObjectCommand({
        Bucket: process.env.EPISODES_S3_BUCKET,
        Key: fileKey
    }));

    const presigner = new S3RequestPresigner(s3.config);
    const signedUrl = formatUrl(await presigner.presign(getReq, {
        expiresIn: 3600 // expiry time in seconds
    }));

    return signedUrl;
}

module.exports = {
    getS3: () => s3,
    getSignedUrl: getSignedUrl
};