import { InputError } from '../exceptions/InputError.js';

export function errorMiddleware(err, req, res, next) {
  if (err.code === 'LIMIT_FILE_SIZE' || err instanceof SyntaxError) {
    return res.status(413).json({
      status: 'fail',
      message: 'Payload content length greater than maximum allowed: 1000000',
    });
  }

  if (err instanceof InputError) {
    return res.status(400).json({
      status: 'fail',
      message: err.message || 'Invalid input data',
    });
  }

  res.status(err.status || 500).json({
    status: 'fail',
    message: err.message || 'Internal Server Error',
  });
}
