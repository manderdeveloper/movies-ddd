import { injectable } from 'inversify';
import { Genre } from '../../../domain/models/Genre';
import { GenreRepository } from '../../../domain/repositories/GenreRepository';

@injectable()
export class InMemoryGenreRepository implements GenreRepository {
  private genres: Genre[] = [];

  getAll(): Promise<Genre[]> {
    return Promise.resolve(this.genres);
  }

  getById(id: string): Promise<Genre | null> {
    const movie = this.genres.find((genre) => genre.id.value === id);
    return Promise.resolve(movie || null);
  }

  create(movie: Genre): Promise<void> {
    this.genres.push(movie);
    return Promise.resolve();
  }

  update(movie: Genre): Promise<void> {
    const index = this.genres.findIndex((genre) => genre.id.value === genre.id.value);
    if (index !== -1) {
      this.genres[index] = movie;
    }
    return Promise.resolve();
  }

  delete(id: string): Promise<void> {
    const index = this.genres.findIndex((genre) => genre.id.value === id);
    if (index !== -1) {
      this.genres.splice(index, 1);
    }
    return Promise.resolve();
  }
}
