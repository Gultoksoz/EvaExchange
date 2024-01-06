import { Module } from '@nestjs/common';
import { PortfolioStock } from './entities/portfolioStocks.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { PortfolioStockService } from './portfolioStocks.service';

@Module({
  imports: [
    SequelizeModule.forFeature([PortfolioStock]),
  ],
  controllers: [],
  providers: [PortfolioStockService ],
  exports: [PortfolioStockService]
})
export class PortfolioStockModule {}
