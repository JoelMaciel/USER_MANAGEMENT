import { listRolesController } from '../../../roles/useCases/listRoles';
import { createRolesController } from '../../useCases/createRole/index';
import { Router } from 'express';

const rolesRouter = Router();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response);
});

export { rolesRouter };
