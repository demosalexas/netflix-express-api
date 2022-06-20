import { Repository } from "typeorm";

import { Profile } from "../entities";
import { AppDataSource } from "../../configs/database/data-source";
import { CRUD } from "../interfaces";

class ProfileService implements CRUD {
  profileRepository: Repository<Profile>;
  constructor () {
    this.profileRepository = AppDataSource.getRepository(Profile);
  };

  async create (resource: any): Promise<any> {
    const initialProfile = {
      user: resource,
      name: "Profile 1"
    };
    await this.profileRepository.save(initialProfile);
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

export default ProfileService;
