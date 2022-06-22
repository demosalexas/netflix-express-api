import { NextFunction, Request } from "express";
import { Schema } from "joi";

import { ValidationException } from "@exceptions";
import { CustomResponse } from "@interfaces";

const ValidationMiddleware = (schema: Schema) => async (request: Request, response: CustomResponse, next: NextFunction) => {
  try {
    const validated = await schema.validate(request.body, { abortEarly: false });

    if (validated.error) {
      throw new ValidationException("Campos inválidos", validated.error?.details);
    };
    next();
  } catch (error: any) {
    response.errorHandler && response.errorHandler(error);
  };
};

export default ValidationMiddleware;
