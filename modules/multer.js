const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const { Profile } = require('../models');
const throwError = require('./throw_error');

require('dotenv').config();

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

s3.deleteObject({
  Bucket: process.env.S3_BUCKET,
  Key: '1_1655470527422_62C10FB6-8F77-4F03-AA51-950CA1F29774.gif',
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: async function (req, file, cb) {
      const { userId } = req.locals.user;
      const ext = file.originalname.split('.')[1];

      if (!['png', 'jpg', 'jpeg', 'gif', 'bmp', 'ico'].includes(ext)) {
        return cb(new Error('이미지 파일 확장자만 업로드 가능'));
      }

      cb(null, `user_${userId}_${Date.now()}.${ext}`);
    },
  }),
});

const deleteImg = async (fileName) => {
  try {
    await s3
      .deleteObject({ Bucket: process.env.S3_BUCKET, Key: fileName })
      .promise();
    return { success: true, data: 'Image deleted Successfully' };
  } catch (error) {
    return { success: false, data: null };
  }
};

module.exports = { upload, deleteImg };
