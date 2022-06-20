import { HTTP_STATUS } from "@enums";
import { HttpException } from "@exceptions";

export default class BadRequestException extends HttpException {
  constructor (message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST);
  };
};
