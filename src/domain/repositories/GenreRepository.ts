import { Genre } from '../models/Genre';
import { BaseRepository } from './BaseRepository';

export interface GenreRepository extends BaseRepository<Genre> {}
