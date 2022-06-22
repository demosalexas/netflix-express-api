import { Router } from "express";

import { ListController } from "@controllers";

const ListRouter: Router = Router();

//ListRouter.get("/lists", ListController);
//ListRouter.get("/lists/:id", ListController.findOne);
ListRouter.post("/lists", ListController.create);
export default ListRouter;
