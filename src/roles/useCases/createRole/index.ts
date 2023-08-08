import { RolesRepository } from '../../repositories/RolesRepository';
import { CreateRolesUseCase } from './CreateRoleUseCase';
import { CreateRoleController } from './CreateRoleController';

const rolesRepository = RolesRepository.getInstance();
const createRoleUseCase = new CreateRolesUseCase(rolesRepository);
export const createRolesController = new CreateRoleController(
  createRoleUseCase,
);
