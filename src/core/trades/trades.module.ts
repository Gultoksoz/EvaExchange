import { Module } from '@nestjs/common';
import { TradesService } from './trades.service';
import { TradesController } from './trades.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trade } from './entities/trade.entity';
import { PortfolioStockModule } from '../portfolio-stock/portfolio-stock.module';

@Module({
  imports: [SequelizeModule.forFeature([Trade]), PortfolioStockModule],
  controllers: [TradesController],
  providers: [TradesService],
  exports:[TradesService]
})
export class TradesModule {}
