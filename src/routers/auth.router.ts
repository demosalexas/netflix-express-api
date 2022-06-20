import { Router } from "express";

import { AuthController } from "../controllers";

const authRouter: Router = Router();

authRouter.get("/shows", AuthController.findAll);

export default authRouter;
