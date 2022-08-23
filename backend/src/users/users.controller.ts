import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
    constructor(private userService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.userService.fetchUsers();
    }

    @Post()
    createUser(@Body() userData: CreateUserDto) {
        return this.userService.createUser(userData)
    }

}