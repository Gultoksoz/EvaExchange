import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Stock } from './entities/stock.entity';
@Seeder({
    model: typeof Stock,
    containsForeignKeys: true,
 })
 export class SeedStock implements OnSeederInit {
    run() {
       const data = [
          {
            symbol: 'MEO',
            price:10,

          },
          {
            symbol: 'ETH',
            price:10,
          },
          
       ];
       return data;
    }
 }