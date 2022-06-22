import { Router } from "express";

import { EpisodeController } from "@controllers";

const EpisodeRouter: Router = Router();

EpisodeRouter.post("/shows/:id/episodes", EpisodeController.create);
EpisodeRouter.get("/shows/:id/episodes", EpisodeController.findAll);
EpisodeRouter.get("/shows/:show_id/episodes/:episode_id", EpisodeController.findOne);

export default EpisodeRouter;
