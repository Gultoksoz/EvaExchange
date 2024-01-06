import { Injectable, Logger } from '@nestjs/common';
import { Stock } from 'src/core/stocks/entities/stock.entity';

@Injectable()
export class StockSeederService {
  private readonly logger = new Logger(StockSeederService.name);

  constructor() {}

  async seed() {
    const stocks = [
      { symbol: 'APL', price: 150.00 },
      { symbol: 'MSF', price: 200.00 },
    ];

    for (const stockData of stocks) {
      await Stock.create(stockData);
    }

    this.logger.log('Stocks seeded!');
  }
}
