import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(@Inject('USER_SERVICE') private readonly userService) {}

    async validateUser(username: string, password: string) {
        const userDB = await this.userService.findUserByUsername(username);
        if(!userDB){
            throw new UnauthorizedException();
        }
        if(userDB && userDB.password === password){
            console.log("user validation success !");
            
            return userDB;
        }
        console.log("user validation failed :( ");

        return null;
    }
}
