// portfolio-stock.model.ts

import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';
import { Stock } from 'src/core/stocks/entities/stock.entity';

@Table
export class PortfolioStock extends Model<PortfolioStock> {
  @ForeignKey(() => Portfolio)
  @Column
  portfolioId: number;

  @BelongsTo(() => Portfolio)
  portfolio: Portfolio;

  @ForeignKey(() => Stock)
  @Column
  stockId: number;

  @BelongsTo(() => Stock)
  stock: Stock;

  @Column
  quantity: number; 
}
