// portfolio-stock.model.ts

import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';
import { Stock } from 'src/core/stocks/entities/stock.entity';

@Table
export class PortfolioStock extends Model<PortfolioStock> {
  @ForeignKey(() => Portfolio)
  @Column
  portfolioId: number;

  @Column({ type: 'integer', allowNull: false })
  quantity: number;

  @BelongsTo(() => Portfolio, 'portfolioId')
  portfolio: Portfolio;

  @ForeignKey(() => Stock)
  @Column
  stockId: number;

  @BelongsTo(() => Stock, 'stockId')
  stock: Stock;
}
