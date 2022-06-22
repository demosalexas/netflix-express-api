import { Router } from "express";

import { GenreController } from "@controllers";

const GenreRouter: Router = Router();

GenreRouter.post("/genres", GenreController.create);
GenreRouter.get("/genres", GenreController.findAll);
GenreRouter.get("/genres/:id", GenreController.findOne);
GenreRouter.patch("/genres/:id", GenreController.update);
GenreRouter.delete("/genres/:id", GenreController.delete);
