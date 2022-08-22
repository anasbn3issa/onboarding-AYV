import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController {
    constructor(userService: UsersService) {}

    @Get()
    getAllUsers() {
        return 'This action returns all users';
    }

    @Post()
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return `This action returns a #${id} user`;

    }
}