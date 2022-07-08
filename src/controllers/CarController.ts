import { 
  NextFunction,
  Request, 
  Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { CarDocument } from '../models/schemas/CarSchema';
import IService from '../services/interfaces';

export default class CarController extends Controller<CarDocument> {
  private _route: string;

  constructor(
    service: IService<CarDocument>,
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<CarDocument>,
    res: Response<CarDocument | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      const { body } = req;
      const car = await this._service.create(body);
      if (!car) return res.status(500).json({ error: this.errors.internal });
      if ('error' in car) return res.status(400).json(car);
      return res.status(201).json(car);
    } catch (error) {
      next(this.errors.internal);
    }
  };

  read = async (
    _req: Request,
    res: Response<CarDocument[] | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      const cars = await this._service.read();
      if (!cars) return res.status(500).json({ error: this.errors.internal });
      return res.status(200).json(cars);
    } catch (error) {
      next(this.errors.internal);
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<CarDocument | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      const { id } = req.params;
      if (id.length < 24) {
        return res.status(400).json({ 
          error: 'Id must have 24 hexadecimal characters',
        });
      }
      const car = await this._service.readOne(id);
      if (!car) return res.status(404).json({ error: 'Object not found' });
      return res.status(200).json(car);
    } catch (error) {
      next(this.errors.internal);
    }
  };
}
