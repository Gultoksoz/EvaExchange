import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PortfolioStock } from './entities/portfolio-stock.entity';
import { Stock } from '../stocks/entities/stock.entity';

@Injectable()
export class PortfolioStockService {

  constructor(
    @InjectModel(PortfolioStock)
    private readonly portfolioStockModel: typeof PortfolioStock,
  ) {}
  // create(createPortfolioStockDto: CreatePortfolioStockDto) {
  //   return 'This action adds a new portfolioStock';
  // }

  // findAll() {
  //   return `This action returns all portfolioStock`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} portfolioStock`;
  // }

  // update(id: number, updatePortfolioStockDto: UpdatePortfolioStockDto) {
  //   return `This action updates a #${id} portfolioStock`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} portfolioStock`;
  // }

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
