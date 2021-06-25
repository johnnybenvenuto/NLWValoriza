import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateUserService {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("1Email/Password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }
    const token = sign({
      email: user.email
    }, "2e5d53de4d53252195d9cd42a5a6bacb", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService }