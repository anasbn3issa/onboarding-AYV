import { Inject } from '@nestjs/common';
import {PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/users.service';


export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly usersService: UsersService,
    ) {
        super();
    }
    serializeUser(user: User, done: (err: Error, user: User) => void): void {
        done(null, user);
    }
    async deserializeUser(payload: User, done: (err: Error, payload: User) => void) {
        // const userDB = await this.usersService.findUserById(payload.id);
        return done(null, payload);
    }
}