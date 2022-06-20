const { User, Profile } = require('../models');

const findUserOptions = {
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
  include: { model: User, attributes: ['username'] },
};

async function findAllUsers() {
  return await Profile.findAll(findUserOptions);
}

async function findUser(userId) {
  return await Profile.findByPk(userId, findUserOptions);
}

async function updateUser(userId, introMessage, imageUrl) {
  return await Profile.update(
    { introMessage, imageUrl },
    { where: { userId } }
  );
}

module.exports = { findAllUsers, findUser, updateUser };
