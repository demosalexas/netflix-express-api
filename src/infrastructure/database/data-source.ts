import { DataSource } from "typeorm";
import { User, Profile, Show, Genre, Season, Episode, List } from "@entities";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "netflix",
  database: "dbnetflix",
  entities: [User, Profile, Show, Genre, Season, Episode, List],
  synchronize: true
});

async function databaseInitialize () {
  try {
    await AppDataSource.initialize();

    console.log("Banco de dados conectado");
  } catch (e: unknown) {
    console.error(e);
  }
}

export default databaseInitialize;
