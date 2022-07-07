import { Car, CarSchema } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
// import CarModel from '../models/CarModel';
import MongoModel from '../models';

export default class CarService extends Service<Car> {
  constructor(_model: MongoModel<Car>) {
    super(_model);
    this._model = _model;
  }

  create = async (entity: Car): Promise<Car | null | ServiceError> => {
    const parsed = CarSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this._model.create(entity);
  };

  read = async (): Promise<Car[]> => this._model.read();

  readOne = async (id: string): Promise<Car | null> =>
    this._model.readOne(id);

  update = async (id: string, entity: Car): 
  Promise<Car | null | ServiceError> => {
    const parsed = CarSchema.safeParse(entity);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this._model.update(id, entity);
  };

  delete = async (id: string): Promise<Car | null> =>
    this._model.delete(id);
}