function errorMiddleware(err, req, res, next) {
  const { status, message } = err;

  res.status(status || 400).json({ success: false, message });
}

module.exports = errorMiddleware;
