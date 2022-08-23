import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
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

    @Get(':id')
    getCarById(@Param('id') id: string) {
        return this.carsService.fetchCarById(id);
    }

    @Delete(':id')
    deleteCarById(@Param('id') id: string) {
        return this.carsService.deleteCarById(id);
    }

    @Patch(':id')
    updateCarById(@Param('id') id: string, @Body() carData: CreateCarDto) {
        return this.carsService.updateCarById(id, carData);
    }
}