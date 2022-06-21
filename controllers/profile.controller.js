const profileService = require('../services/profile.service');
const { deleteImg } = require('../middlewares/multer');
const throwError = require('../modules/throw_error');
const logger = require('../modules/winston');

async function getAllUsers(req, res) {
  // #swagger.tags = ['profile']
  const allUsers = await profileService.findAllUsers();

  res.json({ allUsers });
}

async function getPage(req, res) {
  // #swagger.tags = ['profile']
  const { userId } = req.params;
  const user = await profileService.findUser(userId);

  if (!user) {
    throwError(404, 'Not Found');
  }

  res.json({ user });
}

async function getMyPage(req, res) {
  // #swagger.tags = ['profile']
  const { userId } = res.locals.user;
  const user = await profileService.findUser(userId);

  if (!user) {
    throwError(404, 'Not Found');
  }

  res.json({ user });
}

async function patchMyPage(req, res) {
  // #swagger.tags = ['profile']
  const { userId } = req.locals.user;
  const { introMessage } = req.body;
  const user = await profileService.findUser(userId);

  await deleteImg(user.imageUrl);

  const imageUrl = req.file?.key || '';

  const result = await profileService.updateUser(
    userId,
    introMessage,
    imageUrl
  );

  if (!result[0]) {
    throwError(404, 'Not Found');
  }
  logger.info(`${userId} - 회원 정보 수정`);
  res.json({ introMessage, imageUrl });
}

module.exports = { getAllUsers, getPage, getMyPage, patchMyPage };
