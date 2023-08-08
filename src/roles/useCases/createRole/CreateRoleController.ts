import { CreateRolesUseCase } from './CreateRoleUseCase';
import { Request, Response } from 'express';

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRolesUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const role = this.createRoleUseCase.execute({ name });

    return response.status(201).json(role);
  }
}
