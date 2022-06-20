import { Repository } from "typeorm";

import { CRUD } from "@interfaces";
import { Episode } from "@entities";
import { AppDataSource } from "@data-source";

class EpisodeService implements CRUD {
  episodeRepository: Repository<Episode>;
  constructor () {
    this.episodeRepository = AppDataSource.getRepository(Episode);
  }
  async create (resource: any): Promise<any> {

  };

  async findAll (): Promise<any> {

  };

  async findOne (id: any): Promise<any> {

  };

  async update (id: any): Promise<any> {

  };

  async delete (id: any): Promise<any> {

  };
};

export default EpisodeService;
