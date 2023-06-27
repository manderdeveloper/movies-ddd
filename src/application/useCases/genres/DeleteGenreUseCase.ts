import { injectable, inject, id } from 'inversify';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';
import { Genre } from '../../../domain/models/Genre';
import { IDeleteUseCase } from '../generics/IDeleteUseCase';

@injectable()
export class DeleteGenreUseCase implements IDeleteUseCase<Genre> {
  constructor(
    @inject('GenreRepository')
    private genreRepository: GenreRepository
  ) {}

  async delete(id: string): Promise<void> {
    const genre = this.genreRepository.getById(id);
    if (!genre) throw new Error('Genre not found');
    await this.genreRepository.delete(id);
  }
}