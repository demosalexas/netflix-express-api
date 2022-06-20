import { Repository } from "typeorm";

import { CRUD } from "@interfaces";
import { List } from "@entities";
import { AppDataSource } from "@data-source";

class ListService implements CRUD {
  listRepository: Repository<List>;
  constructor () {
    this.listRepository = AppDataSource.getRepository(List);
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

export default ListService;
