import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

const typeormConfigs: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  migrationsRun: true,
  entities: ['dist/app/entities/*{.ts,.js}'],
  migrations: ['dist/infra/database/typeorm/migrations/*{.ts,.js}'],
  port: 5432,
  ssl: true,
};

export { typeormConfigs };
