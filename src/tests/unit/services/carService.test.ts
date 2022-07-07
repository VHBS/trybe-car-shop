import chai from 'chai';
const { expect } = chai;
import { CarDocument, carMongooseModel } from '../../../models/schemas/CarSchema';
import CarService from '../../../services/CarService';
import MongoModel from '../../../models';
import { mockCreatedCar, mockNewCar } from '../mocks/carMocks';

describe('Car Service', () => {
  class MockCarModel extends MongoModel<CarDocument> {
    create = async (_entity: CarDocument): Promise<CarDocument> => {
      return mockCreatedCar;
    }
    read = async (): Promise<CarDocument[]> => {
      return [];
    }
    readOne = async (id: string): Promise<CarDocument | null> => {
      return null;
    }
    update = async (id: string, entity: CarDocument): Promise<CarDocument | null> => {
      return entity;
    }
    delete = async (id: string): Promise<CarDocument | null> => {
      return null;
    }
  }

  describe('Create car', () => {
    it('Success', async () => {
      const carService = new CarService(new MockCarModel(carMongooseModel));
      const createdCar = await carService.create(mockNewCar);

      expect(createdCar).deep.equal(mockCreatedCar)
    });
  })
});