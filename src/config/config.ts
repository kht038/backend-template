export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  s3: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_REGION,
    bucket: process.env.S3_BUCKET,
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    accessTokenExpires: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshTokenExpires: process.env.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpires: process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpires: process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
};
