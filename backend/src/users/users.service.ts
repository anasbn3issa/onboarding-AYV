import { Injectable } from "@nestjs/common";
import { CreateUserType } from "src/utils/types";
import { User } from "./users.model";

@Injectable()
export class UsersService {
    private users: User[] = [{id:"1", username: "jane", role: "ADMIN"}];

    fetchUsers() {
        return this.users;
    }

    createUser(userDetails : CreateUserType) {
        return this.users.push(userDetails);
    }

}