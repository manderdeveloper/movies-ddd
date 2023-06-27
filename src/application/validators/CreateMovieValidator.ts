import { body } from 'express-validator';

class CreateMovieValidator {
  public static validateCreateMovie() {
    return [
      body('title').notEmpty(),
      body('year').notEmpty().isInt(),
      body('director').notEmpty(),
      body('id').notEmpty().isUUID(),
      body('genreId').notEmpty().isUUID()
    ];
  }
}

export { CreateMovieValidator };
