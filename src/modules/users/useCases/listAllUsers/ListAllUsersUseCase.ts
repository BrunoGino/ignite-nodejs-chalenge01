import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("The passed in user does not exist");
    }

    if (!userExists.admin) {
      throw new Error("Unauthorized");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
