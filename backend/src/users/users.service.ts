import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    const newUser = this.userRepository.create({...userDetails, createdAt: new Date()});
    return this.userRepository.save(newUser);
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({where :{username}});
  }
}
