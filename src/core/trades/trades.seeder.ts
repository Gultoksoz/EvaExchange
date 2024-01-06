import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/sequelize';
import { Trade } from './entities/trade.entity';


@Injectable()
export class SeedTrade implements Seeder {
   constructor(
      @InjectModel(Trade)
      private readonly  tradeModel: typeof Trade,
    ) {}

  async seed(): Promise<any> {
    const tradeData = [
      {
         portfolioId: 1,
         portfolioStockId: 1,
         type: "BUY",
         price: 10,
         quantity: 1,
         stockId: 1

       },
       {
         portfolioId: 2,
         portfolioStockId: 2,
         type: "SELL",
         price: 10,
         quantity: 1,
         stockId: 2
       },
       
    ];
    return this.tradeModel.bulkCreate(tradeData);
  }

  async drop(): Promise<any> {
    return this.tradeModel.drop();
  }
}


