import { AppError } from '@shared/errors/AppError';
import { Router } from 'express';

const routes = Router();
routes.get('/', (request, response) => {
  throw new AppError('Acesso negado');
});

export { routes };
