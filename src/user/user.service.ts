import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(data: CreateUserDTO) {
    const hashPassword = bcrypt.hashSync(data.password, 10);
    const user = await this.usersRepository.findUserByEmail(data.email);
    console.log(user);
    if (user) throw new HttpException('User already exists', HttpStatus.CONFLICT);
    data.password = hashPassword;
    await this.usersRepository.createUser(
      data
    );
    throw new HttpException(`User ${data.name} created`, HttpStatus.CREATED);
  }
}