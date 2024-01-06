import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/sequelize';
import { Stock } from './entities/stock.entity';


@Injectable()
export class SeedStock implements Seeder {
   constructor(
      @InjectModel(Stock)
      private readonly stockModel: typeof Stock,
    ) {}

  async seed(): Promise<any> {
    const stockData = [
      {
         symbol: 'MEO',
         price:10,

       },
       {
         symbol: 'ETH',
         price:10,
       },
       
    ];
    return this.stockModel.bulkCreate(stockData);
  }

  async drop(): Promise<any> {
    return this.stockModel.drop();
  }
}


