import { Model as M, Document, isValidObjectId } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

export default abstract class MongoModel<T> implements Model<T> {
  constructor(protected _model: M<T & Document>) { }

  create = async (entity: T): Promise<T> => this._model.create(entity);

  read = async (): Promise<T[]> => this._model.find();

  readOne = async (id: string): Promise<T | null> => this._model.findById(id);

  update = async (id: string, entity: T): Promise<T | null> => (
    isValidObjectId(id) ? this._model.findOneAndUpdate(
      { _id: id },
      entity,
      { returnOriginal: false },
    ) : null);

  delete = async (id: string): Promise<T | null> => (isValidObjectId(id) 
    ? this._model.findOneAndUpdate({ _id: id }) : null);
}