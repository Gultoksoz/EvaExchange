import { Module } from '@nestjs/common';
import { PortfolioStock } from './entities/portfolioStocks.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { PortfolioStockService } from './portfolioStocks.service';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedPortfolioStock } from './portfolioStocks.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([PortfolioStock]),
    SeederModule.forFeature([SeedPortfolioStock])
  ],
  controllers: [],
  providers: [PortfolioStockService],
  exports: [PortfolioStockService]
})
export class PortfolioStockModule {}
