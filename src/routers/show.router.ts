import { Router } from "express";

import { ShowController } from "@controllers";
import { ValidationMiddleware } from "@middlewares";
import { CreateShowSchema } from "@schemas";

const ShowRouter: Router = Router();

ShowRouter.get("/shows", ShowController.findAll);
ShowRouter.get("/shows/:id", ShowController.findOne);
ShowRouter.get("/shows/genres/:id", ShowController.findByGenre);
ShowRouter.post("/shows", ValidationMiddleware(CreateShowSchema), ShowController.create);

export default ShowRouter;
