import { Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { PublicationDTO } from './dto/publication.dto';
import { PublicationRepository } from './repository/publication.repository';


@Injectable()


export class PublicationService {
 constructor(private readonly publicationRepository: PublicationRepository) {}
   createPublication(body: PublicationDTO, userId: number) {
        this.publicationRepository.createPublication(body, userId);

     }

     getPublicationsByUserId(userId: number) {
            return this.publicationRepository.getPublicationsByUserId(userId);
       }
}
