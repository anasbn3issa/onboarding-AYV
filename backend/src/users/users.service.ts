import { Injectable } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()
export class UsersService {
    private users: User[] = [];

    insertUser(name: string, email: string, password: string, role: string) {
        const userId = Math.random().toString();
        const newUser = new User(userId, name,password, role);
        this.users.push(newUser);
        return userId; 
    }

}