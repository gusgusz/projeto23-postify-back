import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';
import { loginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() body: CreateUserDTO) {
        return this.userService.createUser(body);
    }

   
}
