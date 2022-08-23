import { User } from "src/users/users.model";

export class Car {
    constructor(
        id: string,
        name: string,
        model: string,
        plateNumber: string,
        createdAt: Date,
        user: User,
    ) {}
}