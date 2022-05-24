import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private static INSTANCE: UsersRepository;
  private readonly users: User[];

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => id === user.id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => email === user.email);
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });
    const userIndex = this.users.findIndex(
      (user) => receivedUser.id === user.id
    );

    this.users[userIndex] = receivedUser;

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
