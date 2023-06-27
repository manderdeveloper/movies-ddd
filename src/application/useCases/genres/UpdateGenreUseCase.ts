import { injectable, inject } from 'inversify';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';
import { Genre } from '../../../domain/models/Genre';
import { IUpdateUseCase } from '../generics/IUpdateUseCase';
import { UpdateGenreBody } from './body/UpdateGenreBody';

@injectable()
export class UpdateGenreUseCase implements IUpdateUseCase<UpdateGenreBody>{
  constructor (
    @inject('GenreRepository')
    private genreRepository: GenreRepository
  ) {}

  async update(id: string, body: UpdateGenreBody): Promise<void> {
    const genre = this.genreRepository.getById(id);
    if (!genre) throw new Error('Genre not found');
    delete body.id;
    const updatedGenre = Genre.fromPrimitives({id: id, ...body})
    await this.genreRepository.update(updatedGenre);
  }
}
