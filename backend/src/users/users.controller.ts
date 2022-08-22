import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController {
    constructor(userService: UsersService) {}

    @Get()
    getAllUsers() {
        return 'This action returns all users';
    }
}