import { Request, Response } from "express";
import { ListUserReceiveComplementsService } from "../services/ListUserReceiveComplementsService";

class ListUserReceiveComplementsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveComplementsService = new ListUserReceiveComplementsService();

    const compliments = await listUserReceiveComplementsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplementsController }