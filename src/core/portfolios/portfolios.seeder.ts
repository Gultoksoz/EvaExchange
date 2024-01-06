import { Injectable, Logger } from '@nestjs/common';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';

@Injectable()
export class PortfolioSeederService {
  private readonly logger = new Logger(PortfolioSeederService.name);

  constructor() {}

  async seed() {

    const portfolios = [
      { userId: 1 },
    ];

    for (const portfolioData of portfolios) {
      await Portfolio.create(portfolioData);
    }

    this.logger.log('Portfolios seeded!');
  }
}
