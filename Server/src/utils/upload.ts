import AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';

const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export function uploadToS3(
  fileStream: Buffer,
  folderName: string,
  fileName: string,
): Promise<any> {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `menupls/${folderName}/${fileName}_${Date.now()}`,
    Body: fileStream.buffer,
  };
  return new Promise((resolve, reject) => {
    s3.upload(params as PutObjectRequest, function (err, data) {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}