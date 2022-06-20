import { Request, Response } from "express";

import { ShowService } from "../services";

const showService = new ShowService();

class ShowController {
  public static async create (request: Request, response: Response) {
    try {
      const shows = request.body;

      const result = await showService.create(shows);

      response.send(result);
    } catch (e) {
      console.log(e);
    }
  };

  public static async findAll (request: Request, response: Response) {
    const shows: any = await showService.findAll();

    response.send(shows);
  };

  public static async findOne (request: Request, response: Response) {
    //const { params: { id } }: number | any = request;
    //return showService.findOne(id);
  };

  public static async findByGenre (request: Request, response: Response) {

  };

  public static async update (request: Request, response: Response) {

  };

  public static async delete (request: Request, response: Response) {

  };
};

export default ShowController;
