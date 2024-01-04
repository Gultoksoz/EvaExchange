import { Module } from '@nestjs/common';
import { PortfolioStockService } from './portfolio-stock.service';
import { PortfolioStockController } from './portfolio-stock.controller';
import { PortfolioStock } from './entities/portfolio-stock.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([PortfolioStock])],

  controllers: [PortfolioStockController],
  providers: [PortfolioStockService],
})
export class PortfolioStockModule {}
