import { Document, Schema, model } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';

export interface CarDocument extends Car, Document {}

const carSchema = new Schema<CarDocument>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  status: Boolean,
  buyValue: {
    type: Number,
    required: true,
  },
  doorsQty: {
    type: Number,
    required: true,
  },
  seatsQty: {
    type: Number,
    required: true,
  },
});

export const carMongooseModel = model<CarDocument>('car', carSchema);
