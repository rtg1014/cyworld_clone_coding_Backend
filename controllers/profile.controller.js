const profileService = require('../services/profile.service');
const { deleteImg } = require('../modules/multer');
const throwError = require('../modules/throw_error');

async function getAllUsers(req, res) {
  // #swagger.tags = ['profile']
  const allUsers = await profileService.findAllUsers();

  res.json({ allUsers });
}

async function getMyPage(req, res) {
  // #swagger.tags = ['profile']
  const { userId } = req.params;
  const user = await profileService.findUser(userId);

  if (!user) {
    throwError(404, 'Not Found');
  }

  res.json({ user });
}

async function patchMyPage(req, res) {
  // #swagger.tags = ['profile']
  const { userId } = req.params;
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

  res.json({ introMessage, imageUrl });
}

module.exports = { getAllUsers, getMyPage, patchMyPage };
