import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(@Inject('USER_SERVICE') private readonly userService) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUsername(username);
    if (!userDB) {
      throw new UnauthorizedException();
    }
    if (userDB) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        return userDB;
      } else {
        console.log('user validation failed :( ');
      }
    }
    return null;
  }
}
