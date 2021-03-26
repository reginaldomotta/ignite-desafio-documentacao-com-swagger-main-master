import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (user.admin) {
      throw new Error("User is already admin!");
    }
    user.admin = true;
    user.updated_at = new Date();
    return user;
  }
}

export { TurnUserAdminUseCase };
