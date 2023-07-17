import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from 'src/user/repository/user.repository';
import { PrismaUsersRepository } from '../user/repository/implementations/prismaUser.repository';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions: {
        expiresIn: '7d',
        issuer: 'Driven',
        audience: 'users',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class AuthModule {}
