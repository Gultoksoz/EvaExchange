
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PortfolioStock } from 'src/core/portfolio-stock/entities/portfolio-stock.entity';
import { Trade } from 'src/core/trades/entities/trade.entity';
import { Stock } from 'src/core/stocks/entities/stock.entity';
import { PortfolioStockService } from '../portfolio-stock/portfolio-stock.service';

@Injectable()
export class TradesService {
  constructor(
    @InjectModel(Trade)
    private readonly tradeModel: typeof Trade,
    private readonly portfolioService: PortfolioStockService,
  ) {}

  async buyStock(portfolioId: number, stockSymbol: string, price: number, quantity: number): Promise<void> {
    const portfolioStock = await this.portfolioService.getPortfolioStock(portfolioId, stockSymbol);

    if (portfolioStock) {
      // Kullanıcının yeterli bakiyesi var mı kontrol et
      const totalCost = price * quantity;
      const userBalance = portfolioStock.portfolio.user.balance;

      if (userBalance < totalCost) {
        throw new BadRequestException('Yetersiz bakiye.');
      }

      // Stok miktarı yeterli mi kontrol et
      const availableStockQuantity = portfolioStock.quantity;
      if (availableStockQuantity < quantity) {
        throw new BadRequestException('Yetersiz stok miktarı.');
      }


      // Yeterli bakiye ve stok varsa işlemi gerçekleştir
      const trade = await this.tradeModel.create({
        portfolioStockId: portfolioStock.id,
        type: 'BUY',
        price,
        quantity,
      });

      // Portföydeki stok miktarını güncelle
      await portfolioStock.increment('quantity', { by: quantity });

      // Kullanıcının bakiyesini güncelle
      await portfolioStock.portfolio.user.decrement('balance', { by: totalCost });
    }
  }

  async sellStock(portfolioId: number, stockSymbol: string, price: number, quantity: number): Promise<void> {
    // Kontrolleri yapın (örneğin, portföyde yeterli stok var mı?)
    const portfolioStock = await this.portfolioService.getPortfolioStock(portfolioId, stockSymbol);

    if (portfolioStock) {
      // Stok miktarı yeterli mi kontrol et
      const availableStockQuantity = portfolioStock.quantity;
      if (availableStockQuantity < quantity) {
        throw new BadRequestException('Yetersiz stok miktarı.');
      }

    

      // Yeterli stok varsa işlemi gerçekleştir
      const trade = await this.tradeModel.create({
        portfolioStockId: portfolioStock.id,
        type: 'SELL',
        price,
        quantity,
      });

      // Portföydeki stok miktarını güncelle
      await portfolioStock.decrement('quantity', { by: quantity });

      // Kullanıcının bakiyesini güncelle
      const totalEarnings = price * quantity;
      await portfolioStock.portfolio.user.increment('balance', { by: totalEarnings });
    }
  }

 
}
