import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stock } from './entities/stock.entity';

@Module({
  imports: [SequelizeModule.forFeature([Stock])],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
