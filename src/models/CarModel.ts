import { model as createModel } from 'mongoose';
import MongoModel from '.';
import carSchema from './schemas/CarSchema';
import { Car } from '../interfaces/CarInterface';

export default class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Car', carSchema)) {
    super(model);
  }
}