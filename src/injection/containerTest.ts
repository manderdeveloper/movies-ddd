import { container } from './containerBase';
import { MovieRepository } from '../domain/repositories/MovieRepository';
import { InMemoryMovieRepository } from '../infraestructure/persistence/repositories/InMemoryMovieRepository';
import { MovieController } from '../interfaces/controllers/MovieController';
import { Logger } from '../interfaces/middlewares/Logger';
import { ConsoleLogger } from '../infraestructure/logging/ConsoleLogger';
import { GenreRepository } from '../domain/repositories/GenreRepository';
import { InMemoryGenreRepository } from '../infraestructure/persistence/repositories/InMemoryGenreRepository';
import { CreateMovieUseCase } from '../application/useCases/movies/CreateMovieUseCase';
import { CreateGenreUseCase } from '../application/useCases/genres/CreateGenreUseCase';
import { GenreController } from '../interfaces/controllers/GenreController';
import { ListMovieUseCase } from '../application/useCases/movies/ListMovieUseCase';
import { ListGenreUseCase } from '../application/useCases/genres/ListGenreUseCase';
import { USECASETYPES } from '../shared/types/UseCaseTypes';
import { CONTROLLERTYPES } from '../shared/types/ControllerTypes';

// Repositories
container.bind<MovieRepository>('MovieRepository').toConstantValue(new InMemoryMovieRepository);
container.bind<GenreRepository>('GenreRepository').toConstantValue(new InMemoryGenreRepository);

// Controllers
container.bind<MovieController>(CONTROLLERTYPES.MovieController).to(MovieController);
container.bind<GenreController>(CONTROLLERTYPES.GenreController).to(GenreController);

//UseCases
container.bind<CreateMovieUseCase>(USECASETYPES.CreateMovieUseCase).to(CreateMovieUseCase);
container.bind<CreateGenreUseCase>(USECASETYPES.CreateGenreUseCase).to(CreateGenreUseCase);
container.bind<ListMovieUseCase>(USECASETYPES.ListMovieUseCase).to(ListMovieUseCase);
container.bind<ListGenreUseCase>(USECASETYPES.ListGenreUseCase).to(ListGenreUseCase)

//Logger
container.bind<Logger>('Logger').to(ConsoleLogger);