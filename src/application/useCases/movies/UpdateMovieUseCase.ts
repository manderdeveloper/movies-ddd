import { injectable, inject } from 'inversify';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';
import { Movie } from '../../../domain/models/Movie';
import { IUpdateUseCase } from '../generics/IUpdateUseCase';
import { UpdateMovieBody } from './body/UpdateMovieBody';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';

@injectable()
export class UpdateMovieUseCase implements IUpdateUseCase<UpdateMovieBody>{
  constructor (
    @inject('MovieRepository') private movieRepository: MovieRepository,
    @inject('GenreRepository') private genreRepository: GenreRepository
  ) {}

  async update(id: string, body: UpdateMovieBody): Promise<void> {
    const movie = await this.movieRepository.getById(id);
    const genre = await this.genreRepository.getById(body.genreId);
    if (!movie) throw new Error('Movie not found');
    delete body.id;
    delete body.genreId;
    const updatedMovie = Movie.fromPrimitives({id: id, ...body, genre})
    await this.movieRepository.update(updatedMovie);
  }
}
