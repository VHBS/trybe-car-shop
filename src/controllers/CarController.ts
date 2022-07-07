import { 
  // Request, 
  Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { Car } from '../interfaces/CarInterface';
import Service from '../services';
// import CarService from '../services/CarService';

export default class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service: Service<Car>,
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
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
