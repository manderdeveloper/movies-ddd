import { Request, Response } from "express";
import { inject } from "inversify";
import { httpGet, httpPost, httpPut, httpDelete } from "inversify-express-utils";
import { ICreateUseCase } from "../../../application/useCases/generics/ICreateUseCase";
import { IDeleteUseCase } from "../../../application/useCases/generics/IDeleteUseCase";
import { IListUseCase } from "../../../application/useCases/generics/IListUseCase";
import { IUpdateUseCase } from "../../../application/useCases/generics/IUpdateUseCase";
import { IRetrieveUseCase } from "../../../application/useCases/generics/IRetrieveUseCase";
import { USECASETYPES } from "../../../shared/types/UseCaseTypes";
import { BaseController } from "./BaseController"

export class GenericController<T> implements BaseController<T> {
  constructor(
    @inject(USECASETYPES.GetUseCase) private retrieveUseCase: IRetrieveUseCase<T>,
    @inject(USECASETYPES.CreateUseCase) private createUseCase: ICreateUseCase<T>,
    @inject(USECASETYPES.UpdateUseCase) private updateUseCase: IUpdateUseCase<T>,
    @inject(USECASETYPES.DeleteUseCase) private deleteUseCase: IDeleteUseCase<T>,
    @inject(USECASETYPES.ListUseCase) private listUseCase: IListUseCase<T>
  ) {}

  @httpGet('/:id')
  public retrieve(req: Request, res: Response): void {
    const { id } = req.params;
    const entity = this.retrieveUseCase.retrieve(id);
    res.json(entity);
  }

  @httpGet('/:id')
  public list(req: Request, res: Response): void {
    const entities = this.listUseCase.list();
    res.json(entities);
  }

  @httpPost('/')
  public create(req: Request, res: Response): void {
    const body: T = req.body;
    this.createUseCase.create(body);
    res.sendStatus(201).json({message: "Created"});
  }

  @httpPut('/:id')
  public update(req: Request, res: Response): void {
    const { id } = req.params;
    const body: T = req.body;
    this.updateUseCase.update(id, body);
    res.sendStatus(200).json({message: "Updated"});
  }

  @httpDelete('/:id')
  public delete(req: Request, res: Response): void {
    const { id } = req.params;
    this.deleteUseCase.delete(id);
    res.sendStatus(204);
  }
}