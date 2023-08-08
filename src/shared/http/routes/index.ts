import { rolesRouter } from '../../../roles/http/routes/roles.routes';
import { Router } from 'express';

const routes = Router();
routes.get('/', (request, response) => {
  return response.json({ message: 'Joel' });
});

routes.use('/roles', rolesRouter);

export { routes };
