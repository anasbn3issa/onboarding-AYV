import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports: [UsersModule],
    controllers: [UserController],
    providers: [UsersService],
})
export class UsersModule {}