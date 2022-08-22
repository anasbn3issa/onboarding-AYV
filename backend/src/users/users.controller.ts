import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
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