import { RolesRepository } from '../../repositories/RolesRepository';
import { CreateRolesUseCase } from './CreateRoleUseCase';
import { CreateRoleController } from './CreateRoleController';

const rolesRepository = new RolesRepository();
const createRoleUseCase = new CreateRolesUseCase(rolesRepository);
export const createRolesController = new CreateRoleController(
  createRoleUseCase,
);
