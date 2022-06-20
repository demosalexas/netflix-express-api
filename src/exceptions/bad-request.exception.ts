import { HTTP_STATUS } from "../enums";
import { HttpException } from "./index";

export default class BadRequestException extends HttpException {
  constructor (message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST);
  };
};
