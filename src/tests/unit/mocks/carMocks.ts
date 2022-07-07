import { CarDocument } from "../../../models/schemas/CarSchema";

export const mockNewCar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
  __v: 0
} as CarDocument;

export const mockCreatedCar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
  _id: "62c62ed6cfa81704b0a5293e",
  __v: 0
} as CarDocument;