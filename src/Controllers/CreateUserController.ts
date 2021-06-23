import { Request, Response } from "express"
import { RepositoryNotTreeError } from "typeorm";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();
    try {

      const user = await createUserService.execute({ name, email, admin });

      return response.json(user);

    } catch (error) {
      //console.log(error.message)
      //console.log(`Erro, Usuário: ${name} já existente.`);
      //response.sendStatus(500);
      if (error.message == "User already exists")
        response.send(`O usuário: "${email}" já está cadastrado.`);
    }
  }
}

export { CreateUserController }