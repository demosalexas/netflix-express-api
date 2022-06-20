import { Repository } from "typeorm";

import { AppDataSource } from "../../configs/database/data-source";
import { Show } from "../entities";
import { CreateShowDTO } from "../dto";
import { CRUD } from "../interfaces";

class ShowService implements CRUD {
  private showRepository: Repository<Show>;

  constructor () {
    this.showRepository = AppDataSource.getRepository(Show);
  };

  async create (resource: CreateShowDTO) {
    return this.showRepository.save({});
  };

  async findAll () {
    return this.showRepository.find();
  };

  async findOne (id: any) {
    return this.showRepository.find();
  };

  async update (id: any, resource: any) {
    return this.showRepository.find();
  };

  async delete (id: any) {
    return this.showRepository.find();
  };
};

export default ShowService;
