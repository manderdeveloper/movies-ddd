import { injectable, inject, id } from 'inversify';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';
import { Movie } from '../../../domain/models/Movie';
import { IDeleteUseCase } from '../generics/IDeleteUseCase';

@injectable()
export class DeleteMovieUseCase implements IDeleteUseCase<Movie> {
  constructor(
    @inject('MovieRepository') private movieRepository: MovieRepository
  ) {}

  async delete(id: string): Promise<void> {
    const movie = this.movieRepository.getById(id);
    if (!movie) throw new Error('Movie not found');
    await this.movieRepository.delete(id);
  }
}