import { createUserDto } from '../dtos/createUserDto';
import { User } from '../entities/user';

export abstract class UserRepositoryProps {
  abstract create(createUserDto: createUserDto): Promise<User>;
  abstract findById(id: number): Promise<User | null>;
  abstract findByEmailOrNumber(
    email: string,
    number: number,
  ): Promise<User | null>;
  abstract find(query: any): Promise<User[]>;
  abstract update(user: User): Promise<User>;
  abstract delete(user: User): Promise<User>;
}
