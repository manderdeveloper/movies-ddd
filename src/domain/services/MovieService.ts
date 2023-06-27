import { injectable, inject } from 'inversify';
import { Movie } from '../models/Movie';
import { MovieRepository } from '../repositories/MovieRepository';

@injectable()
export class MovieService {
  private movieRepository: MovieRepository;

  constructor(@inject('MovieRepository') movieRepository: MovieRepository) {
    this.movieRepository = movieRepository;
  }

  async getAllMovies(): Promise<Movie[]> {
    return this.movieRepository.getAll();
  }

  async getMovieById(id: string): Promise<Movie | null> {
    return this.movieRepository.getById(id);
  }

  async createMovie(movie: Movie): Promise<void> {
    return this.movieRepository.create(movie);
  }

  async updateMovie(movie: Movie): Promise<void> {
    return this.movieRepository.update(movie);
  }

  async deleteMovie(id: string): Promise<void> {
    return this.movieRepository.delete(id);
  }
}
