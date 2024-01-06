import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stock } from './entities/stock.entity';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedStock } from './stocks.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Stock]),
    SeederModule.forFeature([SeedStock])
  ],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
