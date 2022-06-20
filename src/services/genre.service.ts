import { Repository } from "typeorm";

import { CRUD } from "@interfaces";
import { Genre } from "@entities";
import { AppDataSource } from "@data-source";

class GenreService implements CRUD {
  genreRepository: Repository<Genre>;
  constructor () {
    this.genreRepository = AppDataSource.getRepository(Genre);
  };
  async create (resource: any): Promise<any> {

  };

  async findAll (): Promise<any> {

  };

  async findOne (id: any): Promise<any> {

  };

  async update (): Promise<any> {

  };

  async delete (id: any): Promise<any> {

  };
};

export default GenreService;
