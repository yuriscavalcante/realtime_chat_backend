import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { createUserDto } from 'src/app/dtos/createUserDto';
import { CreateUserUseCase } from 'src/app/useCases/createUserUseCase/CreateUserUseCase';
import { FindUserByIdUseCase } from 'src/app/useCases/findUserByIdUseCase/FindUserByIdUseCase';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: createUserDto, @Res() res: Response) {
    const newUser = await this.createUserUseCase.execute(createUserDto);
    return res.status(HttpStatus.ACCEPTED).json({
      message: 'Usuario cadastrado com sucesso!',
      newUser,
    });
  }

  @Get(':id')
  async getById(@Param() param: any, @Res() res: Response) {
    const user = await this.findUserByIdUseCase.execute(param.id);
    return res.status(HttpStatus.FOUND).json({
      message: 'Usuario:',
      user,
    });
  }
}
