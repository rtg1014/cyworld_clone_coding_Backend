const logger = require('../modules/winston');

function throwError(status, message, userId = null) {
  logger.error(`${userId} - ${message}`);

  const error = new Error(message);

  error.status = status;
  error.success = false;

  throw error;
}

module.exports = throwError;
