import { Request, Response } from "express";

import { AuthService, UserService } from "../services";
import { CreateUserSchema } from "../schemas/user.schema";

const userService = new UserService();

class UserController {
  public static async create (request: Request, response: Response) {
    const { body } = request;
    try {
      const validatedUser = await CreateUserSchema.validateAsync(body);
      const { id, email }: any = await userService.create(validatedUser);
      response.status(200).json({ id: id, email: email });
    } catch (error) {
      response.status(400).json({ message: error });
    };
  };

  public static async findMe (request: Request, response: Response) {

  };


};

export default UserController;
