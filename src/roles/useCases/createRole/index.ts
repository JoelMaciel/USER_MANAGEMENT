import { RolesRepository } from '../../repositories/RolesRepository';
import { CreateRolesUseCase } from './CreateRoelUseCase';
import { CreateRoleController } from './CreateRoleController';

const rolesRepository = new RolesRepository();
const createRoleUseCase = new CreateRolesUseCase(rolesRepository);
export const createRolesController = new CreateRoleController(
  createRoleUseCase,
);
