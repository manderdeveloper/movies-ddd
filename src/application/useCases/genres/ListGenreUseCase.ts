import { injectable, inject } from 'inversify';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';
import { Genre } from '../../../domain/models/Genre';
import { IListUseCase } from '../generics/IListUseCase';

@injectable()
export class ListGenreUseCase implements IListUseCase<Genre>{
  constructor (
    @inject('GenreRepository')
    private genreRepository: GenreRepository
  ) {}

  async list(): Promise<Genre[]> {
    const genres = await this.genreRepository.getAll();
    return genres.map(genre => genre.toPrimitives());
  }
}
