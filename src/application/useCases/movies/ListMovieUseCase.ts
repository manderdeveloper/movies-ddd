import { injectable, inject } from 'inversify';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';
import { Movie } from '../../../domain/models/Movie';
import { IListUseCase } from '../generics/IListUseCase';

@injectable()
export class ListMovieUseCase implements IListUseCase<Movie>{
  constructor (
    @inject('MovieRepository') private movieRepository: MovieRepository
  ) {}

  async list(): Promise<Movie[]> {
    const movies = await this.movieRepository.getAll();
    return movies.map(movie => movie.toPrimitives());
  }
}
