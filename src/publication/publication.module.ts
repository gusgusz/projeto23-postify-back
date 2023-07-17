import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';
import { PublicationRepository } from './repository/publication.repository';
import { PrismaPublicationRepository } from './repository/implementations/prismaPublication';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module'; 

@Module({
  imports: [UserModule], 
  controllers: [PublicationController],
  providers: [
    PublicationService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    },
    AuthService,
    JwtService,
    UserService,
  ],
  exports: [PublicationService],
})
export class PublicationModule {}
