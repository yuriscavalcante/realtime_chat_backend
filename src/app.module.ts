import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from './infra/http/http.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
