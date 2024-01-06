import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/sequelize';
import { PortfolioStock } from './entities/portfolioStocks.entity';


@Injectable()
export class SeedPortfolioStock implements Seeder {
   constructor(
      @InjectModel(PortfolioStock)
      private readonly portfolioStockModel: typeof PortfolioStock,
    ) {}

  async seed(): Promise<any> {
    const portfolioStockData = [
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
    return this.portfolioStockModel.bulkCreate(portfolioStockData);
  }

  async drop(): Promise<any> {
    return this.portfolioStockModel.drop();
  }
}


