import { Repository } from "typeorm";

import { CRUD } from "@interfaces";
import { Season } from "@entities";
import { AppDataSource } from "@data-source";
import { CreateSeasonDTO } from "@dto";

class SeasonService implements CRUD {
  private seasonRepository: Repository<Season>;

  constructor () {
    this.seasonRepository = AppDataSource.getRepository(Season);
  };

  async create (resource: CreateSeasonDTO): Promise<any> {
    return this.seasonRepository.find();
  };

  async findAll (): Promise<any> {
    return this.seasonRepository.find();
  };

  async findOne (id: number): Promise<any> {
    const season = await this.seasonRepository.findOne({ where: { id } });
    return this.seasonRepository.find();
  };

  async update (id: number, resource: any): Promise<any> {
    const { title } = resource;
    const season = await this.seasonRepository.update({ id }, { title });
    return this.seasonRepository.find();
  };

  async delete (id: number): Promise<any> {
    return this.seasonRepository.delete(id);
  };
};

export default SeasonService;
