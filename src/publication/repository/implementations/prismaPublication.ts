import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PublicationRepository } from '../publication.repository';
import { PublicationDTO } from 'src/publication/dto/publication.dto';

@Injectable()
export class PrismaPublicationRepository implements PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPublication(data: PublicationDTO, userId: number) {
    await this.prisma.publication.create({
        data: {
          ...data,
          userId: userId
        }
      });
    } 

    async getPublicationsByUserId(userId: number) {
        return await this.prisma.publication.findMany(
            {
                where: {
                    userId
            }
          }
        );
        }
}