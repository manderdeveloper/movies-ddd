import { injectable, inject } from 'inversify';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';
import { Genre } from '../../../domain/models/Genre';
import { IListUseCase } from '../generics/IListUseCase';
import { IRetrieveUseCase } from '../generics/IRetrieveUseCase';

@injectable()
export class RetrieveGenreUseCase implements IRetrieveUseCase<Genre>{
  constructor (
    @inject('GenreRepository')
    private genreRepository: GenreRepository
  ) {}

  async retrieve(id: string): Promise<Genre> {
    const genre = await this.genreRepository.getById(id);
    return genre.toPrimitives();
  }
}
