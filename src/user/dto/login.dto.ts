import { IsString, IsNotEmpty, Min } from 'class-validator';

export class loginDto {
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Min(6)
    password: string;
}