import App from './app';
import CarController from './controllers/CarController';
import { Car } from './interfaces/CarInterface';
import CustomRouter from './routes';

// import exampleController from './controllers/controller-example';
// import { example } from './interfaces/ExampleInterface';
// exampleRouter.addRoute(exampleController);
// server.addRouter(exampleRouter.router);

const server = new App();

const carController = new CarController();

const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);
server.addRouter(carRouter.router);

export default server;
