import { Body, Controller, Get, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dtos/CreateCar.dto";

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsService.fetchCars();
    }

    @Post()
    createCar(@Body() carData: CreateCarDto) {
        return this.carsService.createCar(carData);
    }
}