class ApiError extends Error {
  constructor(message, statusCode,errors=[]) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.success = false;
    this.errors = errors;
  }
}

export {ApiError}