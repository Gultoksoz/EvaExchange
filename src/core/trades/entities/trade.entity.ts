// trade.model.ts

import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { PortfolioStock } from 'src/core/portfolio-stock/entities/portfolio-stock.entity';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';
import { Stock } from 'src/core/stocks/entities/stock.entity';

@Table
export class Trade extends Model<Trade> {
  // @ForeignKey(() => Portfolio)
  // @Column
  // portfolioId: number;

  // @BelongsTo(() => Portfolio, 'portfolioId')
  // portfolio: Portfolio;

  @ForeignKey(() => PortfolioStock)
  @Column
  portfolioStockId: number;
  
  @BelongsTo(() => PortfolioStock)
  portfolioStock: PortfolioStock;

  @Column
  type: 'BUY' | 'SELL';

  @Column
  price: number;

  @Column
  quantity: number;

  @ForeignKey(() => Portfolio)
  @Column
  symbol: string;

  @ForeignKey(() => Stock) // Yeni ekledik
  @Column
  stockId: number; // Yeni ekledik

  @BelongsTo(() => Stock, 'stockId') // Yeni ekledik
  stock: Stock; // Yeni ekledik
}
  


