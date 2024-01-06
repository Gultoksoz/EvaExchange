import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { Portfolio } from './entities/portfolio.entity';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class PortfolioSeeder implements Seeder {
   constructor(
      @InjectModel(Portfolio)
      private readonly portfolioModel: typeof Portfolio,
    ) {}

  async seed(): Promise<any> {
    const portfolioData = [
      {
         userId: 1
      },
      {
         userId: 2
      },
    ];
    return this.portfolioModel.bulkCreate(portfolioData);
  }

  async drop(): Promise<any> {
    return this.portfolioModel.drop();
  }
}


