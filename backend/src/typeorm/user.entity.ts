import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'role',
    nullable: false,
    default: 'USER',
  })
  role: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column()
  createdAt: Date;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[]
}