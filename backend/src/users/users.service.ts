import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/utils/bcrypt';
import { CreateUserType } from 'src/utils/types';
import { Repository } from 'typeorm';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  fetchUsers() {
    return this.userRepository.find();
  }

  createUser(userDetails: CreateUserType) {
    const password = encodePassword(userDetails.password);
    console.log(password);
    
    const newUser = this.userRepository.create({...userDetails, password, createdAt: new Date()});
    return this.userRepository.save(newUser);
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({where :{username}});
  }
  
  findUserById(id: number) {
    return this.userRepository.findOne({where :{id}});
  }
}
