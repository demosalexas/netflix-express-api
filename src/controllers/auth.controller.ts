import { Request, Response } from "express";

import { AuthService } from "../services";

const authService = new AuthService();

class AuthController {
  public static async login (request: Request, response: Response) {
    const { body: { email, password } } = request;
    try {
      const authenticatedUser = await authService.login(email, password);

      response.send(authenticatedUser);
    } catch (e) {
      console.log(`Erro ao logar usuário! Dados: ${JSON.stringify({ email })}`);

      //response.errorHandler && response.errorHandler(e)
    }
  };
};

export default AuthController;
