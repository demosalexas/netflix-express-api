import { BadRequestException } from "@exceptions";

class ValidationException extends BadRequestException {
  details?: string[];

  constructor (message: string, details?: any[]) {
    super(message);
    this.details = details;
  }
}

export default ValidationException;
