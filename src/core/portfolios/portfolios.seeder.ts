import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Portfolio } from './entities/portfolio.entity';
@Seeder({
    model: typeof Portfolio,
    containsForeignKeys: true,
 })
 export class SeedPortfolio implements OnSeederInit {
    run() {
       const data = [
          {
            userId: 1
          },
          {
            userId: 2
          },
          
       ];
       return data;
    }
 }