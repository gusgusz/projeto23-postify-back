import { Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { PublicationDTO } from './dto/publication.dto';
import { request } from 'http';
import { PublicationRepository } from './repository/publication.repository';
import { AuthGuard } from 'src/auth/auth.guard';

@Injectable()
UseGuards(AuthGuard)

export class PublicationService {
 constructor(private readonly publicationRepository: PublicationRepository) {}
   createPublication(body: PublicationDTO) {
        const userId = request.user.id;
        this.publicationRepository.createPublication(body, userId);

     }
}
