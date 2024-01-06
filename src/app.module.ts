import { Module, OnModuleInit } from '@nestjs/common';
import { sequelizeConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './core/users/users.module';
import { PortfoliosModule } from './core/portfolios/portfolios.module';
import { StocksModule } from './core/stocks/stocks.module';
import { PortfolioStockModule } from './core/portfolioStocks/portfolioStocks.module';
import { TradesModule } from './core/trades/trades.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { UserSeederService } from './core/users/users.seeder';
import { Sequelize } from 'sequelize-typescript';
import { PortfolioSeederService } from './core/portfolios/portfolios.seeder';
import { StockSeederService } from './core/stocks/stocks.seeder';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot(sequelizeConfig),
    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: true,
      foreignDelay: 5000,
   }),
    UsersModule,
    PortfoliosModule,
    StocksModule,
    PortfolioStockModule,
    TradesModule,
  ],
  controllers: [],
  providers: [UserSeederService,PortfolioSeederService,StockSeederService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly seedUserService:UserSeederService,
    private readonly seedPortfolioService:PortfolioSeederService,
    private readonly seedStockService:StockSeederService,
    private sequelize: Sequelize) {}

  async onModuleInit() {
    await this.sequelize.sync({ force: true }).then(() => {
      this.seedUserService.seed()
      this.seedPortfolioService.seed()
      this.seedStockService.seed()
    });
  }
}

