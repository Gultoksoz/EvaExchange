import { Module } from '@nestjs/common';
import { PortfolioStock } from './entities/portfolio-stock.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { PortfolioStockService } from './portfolio-stock.service';

@Module({
  imports: [SequelizeModule.forFeature([PortfolioStock])],

  controllers: [],
  providers: [PortfolioStockService],
  exports: [PortfolioStockService]
})
export class PortfolioStockModule {}
