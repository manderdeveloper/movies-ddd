import { injectable } from 'inversify';
import { Movie } from '../../../domain/models/Movie';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';

@injectable()
export class InMemoryMovieRepository implements MovieRepository {
  private movies: Movie[] = [];

  getAll(): Promise<Movie[]> {
    return Promise.resolve(this.movies);
  }

  getById(id: string): Promise<Movie | null> {
    const movie = this.movies.find((movie) => movie.id.value === id);
    return Promise.resolve(movie || null);
  }

  create(movie: Movie): Promise<void> {
    this.movies.push(movie);
    return Promise.resolve();
  }

  update(movie: Movie): Promise<void> {
    const index = this.movies.findIndex((movie) => movie.id.value === movie.id.value);
    if (index !== -1) {
      this.movies[index] = movie;
    }
    return Promise.resolve();
  }

  delete(id: string): Promise<void> {
    const index = this.movies.findIndex((movie) => movie.id.value === id);
    if (index !== -1) {
      this.movies.splice(index, 1);
    }
    return Promise.resolve();
  }
}
