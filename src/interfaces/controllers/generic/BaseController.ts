import { Request, Response } from 'express';
import { interfaces } from 'inversify-express-utils';

export interface BaseController<T> extends interfaces.Controller {
  retrieve(req: Request, res: Response): void;
  create(req: Request, res: Response): void;
  update(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
  list(req: Request, res: Response): void;
}