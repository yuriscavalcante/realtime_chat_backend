import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfigs } from './config/TypeormConfig';
import { User } from 'src/app/entities/user';
import { TypeormUser } from './repositories/TypeormUser';
import { UserRepositoryProps } from 'src/app/repositories/userRepositoryProps';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfigs),
    TypeOrmModule.forFeature([
      // entities here
      User,
    ]),
  ],
  providers: [
    /*
        {
            provide: props here
            useClass: TypeormRepository
        }
        */
    {
      provide: UserRepositoryProps,
      useClass: TypeormUser,
    },
  ],
  exports: [
    // props here
    UserRepositoryProps,
  ],
})
export class DatabaseModule {}
