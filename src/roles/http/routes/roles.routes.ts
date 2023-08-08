import { RolesRepository } from '../../repositories/RolesRepository';
import { createRolesController } from '../../useCases/createRole/index';
import { Router } from 'express';

const rolesRouter = Router();
const rolesRepository = new RolesRepository();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll();
  return response.json(roles);
});

export { rolesRouter };
