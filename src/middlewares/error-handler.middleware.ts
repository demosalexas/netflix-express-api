import { NextFunction, Request } from "express";

import { HTTP_STATUS } from "@enums";
import { HttpException } from "@exceptions";
import { CustomResponse } from "@interfaces";

const ErrorHandlerMiddleware = (request: Request, response: CustomResponse, next: NextFunction) => {
  response.errorHandler = (error: any) => {
    if (error instanceof HttpException) {
      response
        .status(error.status)
        .send({ error: true, message: error.message, details: error });
    } else {
      response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: true });
    };
  };
  next();
};

export default ErrorHandlerMiddleware;
