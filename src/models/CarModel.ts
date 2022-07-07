import { Model } from 'mongoose';
import MongoModel from '.';
import { CarDocument } from './schemas/CarSchema';

export default class CarModel extends MongoModel<CarDocument> {
  constructor(model: Model<CarDocument>) {
    super(model);
    this._model = model;
  }
}