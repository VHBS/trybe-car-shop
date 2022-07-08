import { ZodError } from 'zod';

export interface ServiceError {
  error: ZodError;
}

export default interface IService<T> {
  create(entity: T): Promise< T | null | ServiceError>
  read(): Promise<T[]>
  readOne(id:string): Promise<T | null>
  update(id: string, entity: T): Promise<T | null | ServiceError> 
  delete(id: string): Promise<T | null>
}