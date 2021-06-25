import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories";


class ListUserReceiveComplementsService {

  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentRepositories);

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tagId"],
    });

    return compliments;
  }

}

export { ListUserReceiveComplementsService }