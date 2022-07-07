import chai from 'chai';
const { expect } = chai;
import { CarDocument, carMongooseModel } from '../../../models/schemas/CarSchema';
import { Model } from '../../../interfaces/ModelInterface';
import CarService from '../../../services/CarService';
import MongoModel from '../../../models';

describe('Car Service', () => {
  class MockCarModel extends MongoModel<CarDocument> {
    create = async (entity: CarDocument): Promise<CarDocument> => {
      return entity;
    }
    read= async (): Promise<CarDocument[]> => {
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
    
    it('Success', async () => {
      const carService = new CarService(new MockCarModel(carMongooseModel));
      const createdCar = await carService.create(newCar);

      expect(createdCar).deep.equal(mockCreatedCar)
    });
  })
});