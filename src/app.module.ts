import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { sequelizeConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './core/users/users.module';
import { PortfoliosModule } from './core/portfolios/portfolios.module';
import { StocksModule } from './core/stocks/stocks.module';
import { PortfolioStockModule } from './core/portfolio-stock/portfolio-stock.module';
import { TradesModule } from './core/trades/trades.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot(sequelizeConfig),
    UsersModule,
    PortfoliosModule,
    StocksModule,
    PortfolioStockModule,
    TradesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
