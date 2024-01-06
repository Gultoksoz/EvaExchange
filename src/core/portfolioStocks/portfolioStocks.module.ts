import { Module } from '@nestjs/common';
import { PortfolioStock } from './entities/portfolioStocks.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { PortfolioStockService } from './portfolioStocks.service';
import { SeedPortfolioStock } from './portfolioStocks.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([PortfolioStock]),
  ],
  controllers: [],
  providers: [PortfolioStockService, SeedPortfolioStock],
  exports: [PortfolioStockService, SeedPortfolioStock]
})
export class PortfolioStockModule {}
