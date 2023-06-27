import { injectable, inject } from 'inversify';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';
import { Genre } from '../../../domain/models/Genre';
import { ICreateUseCase } from '../generics/ICreateUseCase';
import { CreateGenreBody } from './body/CreateGenreBody';

@injectable()
export class CreateGenreUseCase implements ICreateUseCase<CreateGenreBody>{
  constructor(
    @inject('GenreRepository')
    private genreRepository: GenreRepository
  ) {}

  async create(body: CreateGenreBody): Promise<void> {
    const genre = Genre.fromPrimitives({...body});
    this.genreRepository.create(genre); 
  }
}
