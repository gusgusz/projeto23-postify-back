import { Publication} from '@prisma/client';
import { PublicationDTO } from '../dto/publication.dto';
export abstract class PublicationRepository {
  abstract createPublication(data: PublicationDTO, userId: number): Promise<void>;
  abstract getPublicationsByUserId(userId: number): Promise<Publication[] | void>;
}