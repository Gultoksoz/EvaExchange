import { Module } from '@nestjs/common';
import { TradesService } from './trades.service';
import { TradesController } from './trades.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trade } from './entities/trade.entity';
import { PortfolioStockModule } from '../portfolioStocks/portfolioStocks.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedTrade } from './trades.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Trade]),
     PortfolioStockModule,
     SeederModule.forFeature([SeedTrade])
    ],
  controllers: [TradesController],
  providers: [TradesService],
  exports:[TradesService]
})
export class TradesModule {}
