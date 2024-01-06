import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Trade } from './entities/trade.entity';
@Seeder({
    model: typeof Trade,
    containsForeignKeys: true,
 })
 export class SeedTrade implements OnSeederInit {
    run() {
       const data = [
          {
            portfolioId: 1,
            portfolioStockId: 1,
            type:'BUY',
            price:10,
            quantity:1,
            stockId:1

          },
          {
            portfolioId: 2,
            portfolioStockId: 2,
            type:'BUY',
            price:10,
            quantity:1,
            stockId:2
          },
          
       ];
       return data;
    }
 }