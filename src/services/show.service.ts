import { Repository } from "typeorm";

import { AppDataSource } from "../../configs/database/data-source";
import { Show } from "../entities";

interface CreateShowDTO {
  title: string;
};

class MovieService {
  private movieRepository: Repository<Show>;

  constructor () {
    this.movieRepository = AppDataSource.getRepository(Show);
  };

  findAll () {
    return this.movieRepository.find();
  };

  create (show: CreateShowDTO) {
    return this.movieRepository.save(show);
  };

  update () {

  };

  delete () {

  };

  findOne () {

  };
};

export default MovieService;
