import { Repository } from "typeorm";
import bcrypt from "bcrypt";

import { User } from "../entities";
import { AppDataSource } from "../../configs/database/data-source";
import { CreateUserDTO } from "../dto";
import { CRUD } from "../interfaces";
import { ProfileService } from "./index";

class UserService implements CRUD {
  userRepository: Repository<User>;
  constructor () {
    this.userRepository = AppDataSource.getRepository(User);
  };

  async create (createUserDTO: CreateUserDTO) {
    const profileService = new ProfileService();
    const { email, password } = createUserDTO;
    const SALTS = 10;
    const newUserPayload = {
      email,
      password: await bcrypt.hash(password, SALTS),
    };
    const savedUser = await this.userRepository.save(newUserPayload);
    await profileService.create(savedUser);
    return savedUser;
  };

  async getUserByEmail (email: string) {
    const foundUser = await this.userRepository.findOne({ where: { email } });
    return foundUser;
  };

  async findAll (): Promise<any> {

  };

  async findOne (id: any): Promise<any> {

  };

  async update (id: any, resource: any): Promise<any> {

  };

  async delete (id: any): Promise<any> {

  };
};

export default UserService;
