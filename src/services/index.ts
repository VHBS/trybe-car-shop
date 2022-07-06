import { ZodError } from 'zod';
import { Model } from '../interfaces/ModelInterface';

export interface ServiceError {
  error: ZodError;
}

export default abstract class Service<T> {
  constructor(protected _model: Model<T>) {}

  create = async (entity: T): Promise< T | null | ServiceError> => 
    this._model.create(entity);

  read = async (): Promise<T[]> => this._model.read();

  readeOne = async (id: string): Promise<T | null> => 
    this._model.readOne(id);

  update = async (id: string, entity: T): Promise<T | null | ServiceError> =>
    this._model.update(id, entity);

  delete = async (id: string): Promise<T | null> =>
    this._model.delete(id);
}