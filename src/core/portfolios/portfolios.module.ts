import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Portfolio } from './entities/portfolio.entity';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedPortfolio } from './portfolios.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Portfolio]),
    SeederModule.forFeature([SeedPortfolio])
  ],
  controllers: [PortfoliosController],
  providers: [PortfoliosService],
})
export class PortfoliosModule {}
