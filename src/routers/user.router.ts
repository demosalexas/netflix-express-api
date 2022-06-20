import { Router } from "express";

import { UserController } from "../controllers";

const UserRouter: Router = Router();

UserRouter.post("/users", UserController.create);
UserRouter.get("/me", UserController.findMe);

export default UserRouter;
