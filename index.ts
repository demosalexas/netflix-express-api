import "reflect-metadata";
import express, { Express } from "express";
import cors from "cors";

import databaseInitialize from "./src/infrastructure/database/data-source";
import startRoutes from "./src/routers";

const app: Express = express();
const PORT: number = 3000;

app.use(cors());
app.use(express.json());
databaseInitialize();
startRoutes(app);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
