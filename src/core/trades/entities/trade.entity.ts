// trade.model.ts

import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';

@Table
export class Trade extends Model<Trade> {
  @ForeignKey(() => Portfolio)
  @Column
  portfolioId: number;

  @BelongsTo(() => Portfolio, 'portfolioId')
  portfolio: Portfolio;

  @Column
  type: 'BUY' | 'SELL';

  @Column
  price: number;

  @Column
  quantity: number;
}
