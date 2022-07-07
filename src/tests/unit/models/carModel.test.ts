import mongoose from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
const { expect } = chai;
import { CarDocument, carMongooseModel } from '../../../models/schemas/CarSchema';

describe('Car Model', () => {

  describe('Create car', () => {
    const newCar = {
      model: "Ferrari Maranello",
      year: 1963,
      color: "red",
      buyValue: 3500000,
      doorsQty: 2,
      seatsQty: 2,
      __v: 0
    } as CarDocument;

    const mockCreatedCar = {
      model: "Ferrari Maranello",
      year: 1963,
      color: "red",
      buyValue: 3500000,
      doorsQty: 2,
      seatsQty: 2,
      _id: "62c62ed6cfa81704b0a5293e",
      __v: 0
    };
    
    before(async () => {
      sinon.stub(mongoose.Model, 'create').resolves(mockCreatedCar);
    });
    
    after(() => {
      sinon.restore();
    })
    
    it('Success', async () => {
      const carModel = new CarModel(carMongooseModel);
      const createdCar = await carModel.create(newCar)

      expect(createdCar).deep.equal(mockCreatedCar)
    });
  })
});