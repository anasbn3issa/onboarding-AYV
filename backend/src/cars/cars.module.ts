import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Car } from "src/typeorm";
import { CarsController } from "./cars.controller";
import { CarsService } from "./cars.service";

@Module({
    imports: [TypeOrmModule.forFeature([Car]),CarsModule],
    controllers: [CarsController],
    providers: [CarsService],
})
export class CarsModule {}