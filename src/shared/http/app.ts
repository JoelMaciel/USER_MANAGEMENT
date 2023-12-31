import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { routes } from './routes';
import { AppError } from '../errors/AppError';
import swaggerFile from '../../swagger.json';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message });
    }
    console.log(error);
    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  },
);

export { app };
