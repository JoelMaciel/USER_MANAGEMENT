import { Role } from './../../entities/Role';
import { RolesRepository } from '../../repositories/RolesRepository';
import { AppError } from '../../../shared/errors/AppError';

type CreateRoleDTO = {
  name: string;
};

export class CreateRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name);

    if (roleAlreadyExists) {
      throw new AppError('Role already exists');
    }

    return this.rolesRepository.create({ name });
  }
}
