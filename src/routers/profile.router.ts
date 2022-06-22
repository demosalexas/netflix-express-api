import { Router } from "express";

import { ProfileController } from "@controllers";

const ProfileRouter: Router = Router();

ProfileRouter.post("/users/:id/profiles/:id", ProfileController.create);
ProfileRouter.get("/users/:id/profiles", ProfileController.findAll);
ProfileRouter.get("/users/:id/profiles/:id", ProfileController.findOne);
ProfileRouter.patch("/users/:id/profiles/:id", ProfileController.update);
ProfileRouter.delete("/users/:id/profiles/:id", ProfileController.delete);

export default ProfileRouter;
