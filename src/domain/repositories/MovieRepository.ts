import { Movie } from '../models/Movie';
import { BaseRepository } from './BaseRepository';

export interface MovieRepository extends BaseRepository<Movie> {}
