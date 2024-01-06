import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PortfolioStock } from './entities/portfolioStocks.entity';
import { Stock } from '../stocks/entities/stock.entity';

@Injectable()
export class PortfolioStockService {

  constructor(
    @InjectModel(PortfolioStock)
    private readonly portfolioStockModel: typeof PortfolioStock,
  ) {}
  
  public async getPortfolioStock(portfolioId: number, stockSymbol: string): Promise<PortfolioStock | null> {
    const portfolioStock = await this.portfolioStockModel.findOne({
      where: { portfolioId, '$stock.symbol$': stockSymbol },
      include: [{ model: Stock, as: 'stock' }],
    });

    if (!portfolioStock) {
      throw new NotFoundException('Stok bulunamadı.');
    }

    return portfolioStock;
  }
}
