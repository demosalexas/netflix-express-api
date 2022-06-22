import { Request, Response } from "express";

import { ShowService } from "@services";
import { CustomResponse } from "@interfaces";
import { HTTP_STATUS } from "@enums";

const showService = new ShowService();

class ShowController {
  public static async create (request: Request, response: CustomResponse) {
    try {
      const newShow = request.body;
      console.log(newShow)
      const result = await showService.create(newShow);
      response.status(HTTP_STATUS.CREATED).json(result);
    } catch (error) {
      console.log(error)
      response.errorHandler && response.errorHandler(error);
    };
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
