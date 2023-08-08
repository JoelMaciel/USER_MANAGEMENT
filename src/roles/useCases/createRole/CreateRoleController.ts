import { CreateRolesUseCase } from './CreateRoelUseCase';
import { AppError } from '../../../shared/errors/AppError';
import { RolesRepository } from '../../repositories/RolesRepository';
import { Request, Response } from 'express';

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRolesUseCase) {}
  handle(request: Request, response: Response) {
    const { name } = request.body;
    const role = this.createRoleUseCase.execute({ name });

    return response.status(201).json(role);
  }
}
