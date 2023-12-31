import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class createUserDto {

    @IsOptional()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsNumber()
    number: number;

    @IsOptional()
    @IsString()
    birthDate: string;

    @IsOptional()
    @IsString()
    avatar: string;

}