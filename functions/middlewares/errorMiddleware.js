const fs = require("fs");
const nodeDev = 'development';

// Log error to console
const logError = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

// Handle errors
exports.errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || "Something went wrong";

  // If mongoose not found error, set to 404 and change message
  if ((err.name === "CastError" && err.kind === "ObjectId")) {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: nodeDev === "development" ? err.stack : null,
  });
};

// Handle not found errors
exports.notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

exports.logError = logError; // Expose logError function
