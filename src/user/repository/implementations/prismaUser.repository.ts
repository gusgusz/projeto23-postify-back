import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from '../user.repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDTO) {
    return await this.prisma.user.create({ data: data });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email: email } });
  }
}