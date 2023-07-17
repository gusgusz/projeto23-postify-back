
import { Body, Controller, Post, Get, UseGuards } from "@nestjs/common";
import { loginDto } from "../user/dto/login.dto";
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "../user/dto/createUser.dto";
import { UserService } from "../user/user.service";

@Controller('signin')
export class AuthController {


    constructor(private readonly authService: AuthService) { }

    @Post()
    async login(@Body() body: loginDto) {
      const { email, password } = body;
      return this.authService.login(email, password);
    }

   
}
