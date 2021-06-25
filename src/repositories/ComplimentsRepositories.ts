import { Repository, EntityRepository } from "typeorm"
import { Compliment } from "../entities/Compliments"


@EntityRepository(Compliment)
class ComplimentRepositories extends Repository<Compliment> {

}

export { ComplimentRepositories }