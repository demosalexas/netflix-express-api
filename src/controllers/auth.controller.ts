import { Request, Response } from "express";

import { AuthService } from "../services";

class AuthController {
  public static async findAll (request: Request, response: Response) {

    response.send("shows");
  };
};

export default AuthController;
