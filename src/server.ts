import App from './app';
import CarController from './controllers/CarController';
import CarModel from './models/CarModel';
import { CarDocument, carMongooseModel } from './models/schemas/CarSchema';
import CustomRouter from './routes';
import CarService from './services/CarService';

const server = new App();

const carModel = new CarModel(carMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

const carRouter = new CustomRouter<CarDocument>();
carRouter.addRoute(carController);
server.addRouter(carRouter.router);

export default server;
