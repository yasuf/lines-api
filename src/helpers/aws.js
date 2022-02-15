const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");

const clientParams = { region: 'us-east-1' };

const getObjectParams = {
  Bucket: 'lines-api',
  Key: 'ardilla.mp3',
}

const client = new S3Client(clientParams);

async function getUrl(url) {
  const params = {
    Bucket: 'lines-api',
    Key: `${url}.mp3`,
  }
  const command = new GetObjectCommand(params);
  const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });
  return signedUrl;
}

module.exports = {
  getUrl
}
