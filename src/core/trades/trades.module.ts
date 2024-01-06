import { Module } from '@nestjs/common';
import { TradesService } from './trades.service';
import { TradesController } from './trades.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trade } from './entities/trade.entity';
import { PortfolioStockModule } from '../portfolioStocks/portfolioStocks.module';
import { SeedTrade } from './trades.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Trade]),
     PortfolioStockModule,
    ],
  controllers: [TradesController],
  providers: [TradesService, SeedTrade],
  exports:[TradesService, SeedTrade]
})
export class TradesModule {}
