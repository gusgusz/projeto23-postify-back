import { Controller, HttpStatus, Post, Get, Body, Res, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationDTO } from './dto/publication.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

UseGuards(AuthGuard)

@Controller('/')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post("publication")
  async createPublication(@Body() body: PublicationDTO, @Res() res: Response) {
    this.publicationService.createPublication(body);
    return res.status(HttpStatus.CREATED).json(body);
  }

  @Get("publications")
  async getPublications(@Res() res: Response) {
    const publications = await this.publicationService.getPublications();
    return res.status(HttpStatus.OK).json(publications);
  }
}
