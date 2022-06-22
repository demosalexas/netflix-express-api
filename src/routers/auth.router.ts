import { Router } from "express";

import { AuthController } from "@controllers";
import { ValidationMiddleware } from "@middlewares";
import { LoginUserSchema } from "@schemas";

const authRouter: Router = Router();

authRouter.post("/login", ValidationMiddleware(LoginUserSchema), AuthController.login);

export default authRouter;
