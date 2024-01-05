import { Controller, Post, Body, Param } from '@nestjs/common';
import { TradesService } from './trades.service';

@Controller('trades')
export class TradesController {
  constructor(private readonly tradesService: TradesService) {}

  @Post('buy/:portfolioId/:stockSymbol')
  async buyStock(
    @Param('portfolioId') portfolioId: number,
    @Param('stockSymbol') stockSymbol: string,
    @Body('price') price: number,
    @Body('quantity') quantity: number,
  ): Promise<void> {
    try {
      await this.tradesService.buyStock(portfolioId, stockSymbol, price, quantity);
      return;
    } catch (error) {
      // Hata durumlarını yönet
      // Örneğin, hata durumlarına göre HTTP durum kodları döndürebilirsiniz.
      throw error;
    }
  }

  @Post('sell/:portfolioId/:stockSymbol')
  async sellStock(
    @Param('portfolioId') portfolioId: number,
    @Param('stockSymbol') stockSymbol: string,
    @Body('price') price: number,
    @Body('quantity') quantity: number,
  ): Promise<void> {
    try {
      await this.tradesService.sellStock(portfolioId, stockSymbol, price, quantity);
      return;
    } catch (error) {
      // Hata durumlarını yönet
      // Örneğin, hata durumlarına göre HTTP durum kodları döndürebilirsiniz.
      throw error;
    }
  }
}
