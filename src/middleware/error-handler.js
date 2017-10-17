import { ValidationError } from 'express-validation';

// error handler
export default (err, req, res) => {
  // specific for validation errors
  if (err instanceof ValidationError) return res.status(err.status).json(err);

  // other type of errors, it *might* also be a Runtime Error
  // example handling
  if (process.env.NODE_ENV !== 'production') {
    return res.status(500).send(err.stack);
  } else {
    return res.status(500);
  }
};
