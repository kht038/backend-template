import { PutObjectCommand, PutObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';
import path from 'path';
import fs from 'fs';

const file = 'OBJECT_PATH_AND_NAME'; // Path to and name of object. For example '../myFiles/index.js'.
const fileStream = fs.createReadStream(file);

// Upload file to specified bucket.
export const upload = async () => {
  // Set the parameters
  const uploadParams = {
    Bucket: 'BUCKET_NAME',
    // Add the required 'Key' parameter using the 'path' module.
    Key: path.basename(file),
    // Add the required 'Body' parameter
    Body: fileStream,
  };
  const client = new S3Client({ region: 'ap-northeast-2' });
  let data: PutObjectCommandOutput;
  try {
    data = await client.send(new PutObjectCommand(uploadParams));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
  return data; // For unit tests.
};

// presignedS3Object
