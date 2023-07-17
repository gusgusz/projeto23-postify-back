import { Controller, HttpStatus, Post, Get, Body, Res, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationDTO } from './dto/publication.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.decorator';

@Controller()
@UseGuards(AuthGuard) 
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post("publication")
  async createPublication(@Body() body: PublicationDTO, @User() user, @Res() res: Response) {
    const userId = user.id;
    const publication = this.publicationService.createPublication(body, userId);
    return res.status(HttpStatus.CREATED).json(publication);
  }

  @Get("publications")
  async getPublications(@User() user, @Res() res: Response) {
    const userId = user.id;
    const publications = await this.publicationService.getPublicationsByUserId(userId);
    return res.status(HttpStatus.OK).json(publications);
  }
}
