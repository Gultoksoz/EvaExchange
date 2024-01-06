import { seeder } from 'nestjs-seeder';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './database/database.config';
import { PortfolioSeeder } from './core/portfolios/portfolios.seeder';
import { SeedPortfolioStock } from './core/portfolioStocks/portfolioStocks.seeder';
import { SeedStock } from './core/stocks/stocks.seeder';
import { SeedTrade } from './core/trades/trades.seeder';
import { SeedUser } from './core/users/users.seeder';
import { ConfigModule } from '@nestjs/config';



seeder({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot(sequelizeConfig),
    
  ],
}).run([PortfolioSeeder, SeedStock, SeedTrade,SeedUser, SeedPortfolioStock]);
