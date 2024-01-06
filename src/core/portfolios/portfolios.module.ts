import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Portfolio } from './entities/portfolio.entity';
import { PortfolioSeeder } from './portfolios.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Portfolio]),
  ],
  controllers: [PortfoliosController],
  providers: [PortfoliosService, PortfolioSeeder],
  exports: [PortfoliosService, PortfolioSeeder],
})
export class PortfoliosModule {}
