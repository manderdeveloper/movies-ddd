import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut} from 'inversify-express-utils';
import { CreateGenreUseCase } from '../../application/useCases/genres/CreateGenreUseCase';
import { ListGenreUseCase } from '../../application/useCases/genres/ListGenreUseCase';
import { USECASETYPES } from '../../shared/types/UseCaseTypes';
import { RetrieveGenreUseCase } from '../../application/useCases/genres/RetrieveGenreUseCase';
import { UpdateGenreUseCase } from '../../application/useCases/genres/UpdateGenreUseCase';
import { CreateGenreBody } from '../../application/useCases/genres/body/CreateGenreBody';
import { DeleteGenreUseCase } from '../../application/useCases/genres/DeleteGenreUseCase';
import { UpdateGenreBody } from '../../application/useCases/genres/body/UpdateGenreBody';

@controller('/genres')
export class GenreController {
  constructor(
    @inject(USECASETYPES.ListGenreUseCase) private listUseCase: ListGenreUseCase,
    @inject(USECASETYPES.RetrieveGenreUseCase) private retrieveUseCase: RetrieveGenreUseCase,
    @inject(USECASETYPES.CreateGenreUseCase) private createUseCase: CreateGenreUseCase,
    @inject(USECASETYPES.UpdateGenreUseCase) private updateUseCase: UpdateGenreUseCase,
    @inject(USECASETYPES.DeleteGenreUseCase) private deleteUseCase: DeleteGenreUseCase,
  ) {}
  
  @httpGet('/')
  async list(req: Request, res: Response) {
    try {
      const genres = await this.listUseCase.list();
      return res.status(201).json(genres);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating genre' });
    }
  }

  @httpGet('/:id')
  async retrieve(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const genre = await this.retrieveUseCase.retrieve(id);
      return res.status(201).json(genre);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating genre' });
    }
  }

  @httpPost('/')
  async create(req: Request, res: Response) {
    try {

      const body: CreateGenreBody = req.body;
      await this.createUseCase.create(body);
      return res.status(201).json({message: 'Created'});

    } catch (error) {
      return res.status(500).json({ message: 'Error creating genre' });
    }
  }

  @httpPut('/:id')
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body: UpdateGenreBody = req.body;
      await this.updateUseCase.update(id, body);
      return res.status(201).json({message: 'Updated'});

    } catch (error) {
      return res.status(500).json({ message: 'Error creating genre' });
    }
  }

  @httpDelete('/:id')
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.deleteUseCase.delete(id);
      return res.status(201).json({message: 'Deleted'});

    } catch (error) {
      return res.status(500).json({ message: 'Error creating genre' });
    }
  }
}
