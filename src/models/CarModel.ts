import { Model } from 'mongoose';
import MongoModel from '.';
import { CarDocument } from './schemas/CarSchema';
import { Car } from '../interfaces/CarInterface';

export default class CarModel extends MongoModel<Car> {
  constructor(model: Model<CarDocument>) {
    super(model);
    this._model = model;
  }
}