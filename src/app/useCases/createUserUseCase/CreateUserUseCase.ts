import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/app/dtos/createUserDto';
import { UserRepositoryProps } from 'src/app/repositories/userRepositoryProps';
import { BadRequestError } from 'src/common/errors/type/BadRequestError';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly user: UserRepositoryProps) {}

  async execute(user: createUserDto) {
    const birthDate = new Date(user.birthDate);
    Object.assign(user, {
      birthDate: birthDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const isUser = await this.user.findByEmailOrNumber(user.email, user.number);
    if (isUser) throw new BadRequestError('Usuario já existente!');
    const newUser = await this.user.create(user);
    return newUser;
  }
}
