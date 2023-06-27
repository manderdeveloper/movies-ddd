import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut} from 'inversify-express-utils';
import { CreateMovieUseCase } from '../../application/useCases/movies/CreateMovieUseCase';
import { CreateMovieValidator } from '../../application/validators/CreateMovieValidator';
import { validationMiddleware } from '../middlewares/Validation';
import { ListMovieUseCase } from '../../application/useCases/movies/ListMovieUseCase';
import { USECASETYPES } from '../../shared/types/UseCaseTypes';
import { CreateMovieBody } from '../../application/useCases/movies/body/CreateMovieBody';
import { DeleteMovieUseCase } from '../../application/useCases/movies/DeletemovieUseCase';
import { RetrieveMovieUseCase } from '../../application/useCases/movies/RetrieveMovieUseCase';
import { UpdateMovieUseCase } from '../../application/useCases/movies/UpdateMovieUseCase';
import { UpdateMovieBody } from '../../application/useCases/movies/body/UpdateMovieBody';

@controller('/movies')
export class MovieController {
  constructor(
    @inject(USECASETYPES.ListMovieUseCase) private listUseCase: ListMovieUseCase,
    @inject(USECASETYPES.RetrieveMovieUseCase) private retrieveUseCase: RetrieveMovieUseCase,
    @inject(USECASETYPES.CreateMovieUseCase) private createUseCase: CreateMovieUseCase,
    @inject(USECASETYPES.UpdateMovieUseCase) private updateUseCase: UpdateMovieUseCase,
    @inject(USECASETYPES.DeleteMovieUseCase) private deleteUseCase: DeleteMovieUseCase,
  ) {}
  
  @httpGet('/')
  async list(req: Request, res: Response) {
    try {
      const movies = await this.listUseCase.list();
      return res.status(201).json(movies);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating genre' });
    }
  }

  @httpPost('/', validationMiddleware(CreateMovieValidator.validateCreateMovie()))
  async create(req: Request, res: Response) {
    try {
      const body: CreateMovieBody = req.body;
      await this.createUseCase.create(body);
      return res.status(201).json({message: 'Created'});

    } catch (error) {
      return res.status(500).json({ message: 'Error creating movie' });
    }
  }

  @httpGet('/:id')
  async retrieve(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const movie = await this.retrieveUseCase.retrieve(id);
      return res.status(201).json(movie);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating movie' });
    }
  }

  @httpPut('/:id')
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body: UpdateMovieBody = req.body;
      delete body.id;
      await this.updateUseCase.update(id, body);
      return res.status(201).json({message: 'Updated'});

    } catch (error) {
      return res.status(500).json({ message: 'Error creating movie' });
    }
  }

  @httpDelete('/:id')
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.deleteUseCase.delete(id);
      return res.status(201).json({message: 'Deleted'});

    } catch (error) {
      return res.status(500).json({ message: 'Error creating movie' });
    }
  }
  
}