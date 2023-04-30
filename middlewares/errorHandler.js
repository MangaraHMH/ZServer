function errorHandler(err, req, res, next) {
  let message = "Internal Server Error";
  let statusCode = 500;

  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      statusCode = 400;
      message = err.errors.map((el) => el.message);
      break;
    case "Not Found":
      statusCode = 404;
      message = "Not Found";
      break;
  }
  res.status(statusCode).json({ message });
}

module.exports = errorHandler;
