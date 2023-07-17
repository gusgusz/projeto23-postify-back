import { IsString, IsNotEmpty, Min, MinLength } from 'class-validator';

export class loginDto {
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}