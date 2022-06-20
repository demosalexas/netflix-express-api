import { Router } from "express";

import { ShowController } from "../controllers";

const ShowRouter: Router = Router();

ShowRouter.get("/shows", ShowController.findAll);
ShowRouter.get("/shows/:id", ShowController.findOne);
ShowRouter.get("/shows/genres/:id", ShowController.findByGenre);
ShowRouter.post("/shows", ShowController.create);

export default ShowRouter;
