import { User } from '@prisma/client';
import { CreateUserDTO } from '../dto/createUser.dto';

export abstract class UsersRepository {
  abstract createUser(data: CreateUserDTO): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User | null>;
}