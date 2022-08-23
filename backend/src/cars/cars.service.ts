import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCarType } from "src/utils/types";
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
    
    createCar(carDetails: CreateCarType) {
        const newCar = this.carsRepository.create({...carDetails, createdAt: new Date(), user: null});
        return this.carsRepository.save(newCar);
    }

    fetchCarById(id: string) {
        return this.carsRepository.findOneById(id);
    }

    deleteCarById(id: string) {
        return this.carsRepository.delete(id);
    }
}