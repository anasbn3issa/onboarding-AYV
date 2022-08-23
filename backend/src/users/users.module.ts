import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports: [TypeOrmModule.forFeature([User]),UsersModule],
    controllers: [UserController],
    providers: [UsersService],
})
export class UsersModule {}