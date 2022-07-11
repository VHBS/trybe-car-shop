import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
import { NextFunction, Request, Response } from 'express';

// import server from '../../../server';
// import { Response } from 'superagent';
import { CarDocument } from '../../../models/schemas/CarSchema';
import { mockCreatedCar } from '../mocks/carMocks';
import CarController from '../../../controllers/CarController';
import IService from '../../../services/interfaces';

describe('Car Controller', () => {
  class MockCarService implements IService<CarDocument> {
    create = async (): Promise<CarDocument> => {
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

  describe('Car create', async () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = () => ({}) as NextFunction;

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = mockCreatedCar;
    });

    it('Success', async () => {
      const carController = new CarController(new MockCarService());
      await carController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201));
      expect((res.json as sinon.SinonStub).calledWith(mockCreatedCar));
    });
  });
});