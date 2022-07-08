import { NextFunction, Request, Response } from 'express';
import IService from '../services/interfaces';

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

export default abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected _service: IService<T>) { }

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;

  abstract read(
    req: Request,
    res: Response<T[] | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;

  abstract readOne(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;

  abstract update(
    req: RequestWithBody<{ id: string; } & T>,
    res: Response<T | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;
}
