import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/typeorm/database.module';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from 'src/app/useCases/createUserUseCase/CreateUserUseCase';
import { FindUserByIdUseCase } from 'src/app/useCases/findUserByIdUseCase/FindUserByIdUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [
    // Controllers aqui
    UserController,
  ],
  providers: [
    // UseCases aqui
    CreateUserUseCase,
    FindUserByIdUseCase,
  ],
})
export class HttpModule {}
