import { CustomError } from './custom-error';

export class NotFoundError extends CustomError{
  statusCode = 404;
  reason='Route not found'

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  generateErrors() {
    return [{ message: this.reason }];
  }
}
