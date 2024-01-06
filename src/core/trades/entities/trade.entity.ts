// trade.model.ts

import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { PortfolioStock } from 'src/core/portfolioStocks/entities/portfolioStocks.entity';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';
import { Stock } from 'src/core/stocks/entities/stock.entity';

@Table
export class Trade extends Model<Trade> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Portfolio)
  @Column
  portfolioId: number;

  @BelongsTo(() => Portfolio, 'portfolioId')
  portfolio: Portfolio;

  @ForeignKey(() => PortfolioStock)
  @Column
  portfolioStockId: number;
  
  @BelongsTo(() => PortfolioStock, 'portfolioStockId')
  portfolioStock: PortfolioStock;

  @Column
  type: 'BUY' | 'SELL';

  @Column
  price: number;

  @Column
  quantity: number;

 
  @ForeignKey(() => Stock) // Yeni ekledik
  @Column
  stockId: number; // Yeni ekledik

  @BelongsTo(() => Stock, 'stockId') // Yeni ekledik
  stock: Stock; // Yeni ekledik
}
  