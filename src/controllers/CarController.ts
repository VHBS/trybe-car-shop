import { 
  // Request, 
  Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { CarDocument } from '../models/schemas/CarSchema';
import Service from '../services';

export default class CarController extends Controller<CarDocument> {
  private _route: string;

  constructor(
    service: Service<CarDocument>,
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<CarDocument>,
    res: Response<CarDocument | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const { body } = req;
      const car = await this._service.create(body);
      if (!car) return res.status(500).json({ error: this.errors.internal });
      if ('error' in car) return res.status(400).json(car);
      return res.status(201).json(car);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
