import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { PortfolioStock } from './entities/portfolioStocks.entity';
@Seeder({
    model: typeof PortfolioStock,
    containsForeignKeys: true,
 })
 export class SeedPortfolioStock implements OnSeederInit {
    run() {
       const data = [
          {
            portfolioId: 1,
            stockId:1,
            quantity:1
          },
          {
            portfolioId: 2,
            stockId:2,
            quantity:1
          },
          
       ];
       return data;
    }
 }