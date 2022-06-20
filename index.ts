import "reflect-metadata";
import express, { Express, Request, Response, NextFunction } from "express";

import databaseInitialize from "./configs/database/data-source";
import startRoutes from "./src/routers";

const app: Express = express();
const PORT: number = 3000;

// app.use(express.json());
databaseInitialize();
startRoutes(app);

app.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.send(`<h1 style="color:blue">${"Netflix Express API"}</h1>`);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
