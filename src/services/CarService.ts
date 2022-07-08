import { CarSchema } from '../interfaces/CarInterface';
import Service from '.';
import { ServiceError } from './interfaces';
import MongoModel from '../models';
import { CarDocument } from '../models/schemas/CarSchema';

export default class CarService extends Service<CarDocument> {
  constructor(_model: MongoModel<CarDocument>) {
    super(_model);
    this._model = _model;
  }

  create = async (entity: CarDocument): 
  Promise<CarDocument | null | ServiceError> => {
    const parsed = CarSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this._model.create(entity);
  };

  read = async (): Promise<CarDocument[]> => this._model.read();

  readOne = async (id: string): Promise<CarDocument | null> =>
    this._model.readOne(id);

  update = async (id: string, entity: CarDocument): 
  Promise<CarDocument | null | ServiceError> => {
    const parsed = CarSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this._model.update(id, entity);
  };

  delete = async (id: string): Promise<CarDocument | null> =>
    this._model.delete(id);
}