import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from 'src/app/dtos/createUserDto';
import { User } from 'src/app/entities/user';
import { UserRepositoryProps } from 'src/app/repositories/userRepositoryProps';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormUser implements UserRepositoryProps {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async create(createUserDto: createUserDto): Promise<User> {
    return await this.user.save(createUserDto);
  }

  async findById(id: number): Promise<User | null> {
    return await this.user.findOne({
      where: {
        id,
      },
    });
  }

  async findByEmailOrNumber(
    email: string,
    number: number,
  ): Promise<User | null> {
    return await this.user.findOne({
      where: [
        {
          email,
        },
        {
          number: number,
        },
      ],
    });
  }

  async find(query: any): Promise<User[]> {
    return await this.user.createQueryBuilder('user').where(query).getMany();
  }

  async update(user: User): Promise<User> {
    return await this.user.save(user);
  }

  async delete(user: User): Promise<User> {
    return await this.user.remove(user);
  }
}
