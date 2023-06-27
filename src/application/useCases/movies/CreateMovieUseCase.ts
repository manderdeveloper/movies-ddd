import { injectable, inject } from 'inversify';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';
import { ICreateUseCase } from '../generics/ICreateUseCase';
import { CreateMovieBody } from './body/CreateMovieBody';
import { Movie } from '../../../domain/models/Movie';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';

@injectable()
export class CreateMovieUseCase implements ICreateUseCase<CreateMovieBody>{
  constructor(
    @inject('MovieRepository') private movieRepository: MovieRepository,
    @inject('GenreRepository') private genreRepository: GenreRepository
  ) {}

  async create(body: CreateMovieBody): Promise<void> {
    const genreId = body.genreId;
    delete body.genreId;
    const genre = await this.genreRepository.getById(genreId);
    if (!genre) {
      throw new Error('Invalid genre ID');
    }
    const movie = Movie.fromPrimitives({...body, genre});
    await this.movieRepository.create(movie); 
  }
}

