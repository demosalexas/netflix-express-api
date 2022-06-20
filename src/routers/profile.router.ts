import { Router } from "express";

import { ProfileController } from "../controllers";

const ProfileRouter: Router = Router();

ProfileRouter.get("/users/:id/profiles", ProfileController.findAll);
ProfileRouter.post("/users/:id/profiles/:id", ProfileController.create);

export default ProfileRouter;
