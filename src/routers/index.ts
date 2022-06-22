import express, { Application, Router } from "express";
import morgan from "morgan";

import { ErrorHandlerMiddleware } from "@middlewares";

import AuthRouter from "./auth.router";
import ShowRouter from "./show.router";
import UserRouter from "./user.router";
import EpisodeRouter from "./episode.router";
import ListRouter from "./list.router";
import SeasonRouter from "./season.router";
import ProfileRouter from "./profile.router";

const routes: Router[] = [
  AuthRouter,
  UserRouter,
  ProfileRouter,
  ListRouter,
  ShowRouter,
  SeasonRouter,
  EpisodeRouter
];

const jsonParserMiddleware = express.json();

function startRoutes (app: Application): void {
  app.use(jsonParserMiddleware);
  app.use(morgan("tiny"));
  app.use(ErrorHandlerMiddleware);
  app.use(routes);
};

export default startRoutes;
