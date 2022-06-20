import { Repository } from "typeorm";
import bcrypt from "bcrypt";

import { User } from "../entities";
import { AppDataSource } from "../../configs/database/data-source";
import { CreateUserDTO } from "../dto";

class UserService {
  userRepository: Repository<User>;
  constructor () {
    this.userRepository = AppDataSource.getRepository(User);
  };

  async create (createUserDTO: CreateUserDTO) {
    const { email, password } = createUserDTO;
    const SALTS = 10;
    const newUserPayload = {
      email,
      password: await bcrypt.hash(password, SALTS),
    };
    const savedUser = await this.userRepository.save(newUserPayload);
    return savedUser;
  };
};

export default UserService;
