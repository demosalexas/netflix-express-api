import { Router } from "express";

import { SeasonController } from "../controllers";

const SeasonRouter: Router = Router();

SeasonRouter.get("/shows/:id/seasons", SeasonController.findAll);
SeasonRouter.get("/shows/:id/seasons/:id", SeasonController.findOne);
SeasonRouter.post("/shows/:id/seasons", SeasonController.create);
SeasonRouter.patch("/shows/:id/seasons/:id", SeasonController.update);
SeasonRouter.delete("/shows/:id/seasons/:id", SeasonController.delete);

export default SeasonRouter;
