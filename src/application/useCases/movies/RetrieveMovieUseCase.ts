import { injectable, inject } from 'inversify';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';
import { Movie } from '../../../domain/models/Movie';
import { IListUseCase } from '../generics/IListUseCase';
import { IRetrieveUseCase } from '../generics/IRetrieveUseCase';

@injectable()
export class RetrieveMovieUseCase implements IRetrieveUseCase<Movie>{
  constructor (
    @inject('MovieRepository') private movieRepository: MovieRepository
  ) {}

  async retrieve(id: string): Promise<Movie> {
    const movie = await this.movieRepository.getById(id);
    return movie.toPrimitives();
  }
}
