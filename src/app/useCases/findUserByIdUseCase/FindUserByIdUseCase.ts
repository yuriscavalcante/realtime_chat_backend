import { Injectable } from '@nestjs/common';
import { UserRepositoryProps } from 'src/app/repositories/userRepositoryProps';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly user: UserRepositoryProps) {}

  async execute(id: number) {
    const user = await this.user.findById(id);
    return user;
  }
}
