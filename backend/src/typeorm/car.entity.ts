import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'user_cars'})
export class Car {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'car_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    name: string;

    @Column({
        nullable: false,
        default: '',
    })
    model: string;

    @Column({
        nullable: false,
        default: '',
    })
    plateNumber: string;


    @Column()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.cars)
    user: User

}