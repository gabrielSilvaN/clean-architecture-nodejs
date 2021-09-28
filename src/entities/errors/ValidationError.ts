export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
