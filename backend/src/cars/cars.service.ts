import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Car } from "./cars.model";

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car) private readonly carsRepository: Repository<Car>,
    ) {}

    fetchCars() {
        return this.carsRepository.find();
    }
}