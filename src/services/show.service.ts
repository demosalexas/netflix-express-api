import { Repository } from "typeorm";

import { AppDataSource } from "@data-source";
import { Show } from "@entities";
import { CreateShowDTO } from "@dto";
import { CRUD } from "@interfaces";

class ShowService implements CRUD {
  private showRepository: Repository<Show>;

  constructor () {
    this.showRepository = AppDataSource.getRepository(Show);
  };

  async create (resource: CreateShowDTO) {
    console.log(resource, "service");
    const createdShow = await this.showRepository.save(resource);
    console.log(createdShow, "service");
    return createdShow;
  };

  async findAll () {
    return this.showRepository.find();
  };

  async findOne (id: any) {
    return this.showRepository.findOneBy({ id: id });
  };

  async update (id: any, resource: any) {
    return this.showRepository.update({ id: id }, { title: resource });
  };

  async delete (id: any) {
    return this.showRepository.delete({ id: id });
  };
};

export default ShowService;
