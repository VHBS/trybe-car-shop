import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
const { expect } = chai;
import { carMongooseModel } from '../../../models/schemas/CarSchema';
import { mockCreatedCar, mockNewCar } from '../mocks/carMocks';

describe('Car Model', () => {

  describe('Create car', () => {    
    before(async () => {
      sinon.stub(carMongooseModel, 'create').resolves(mockCreatedCar);
    });
    
    after(() => {
      sinon.restore();
    })
    
    it('Success', async () => {
      const carModel = new CarModel(carMongooseModel);
      const createdCar = await carModel.create(mockNewCar)

      expect(createdCar).deep.equal(mockCreatedCar)
    });
  })
});