import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { PortfolioStock } from 'src/core/portfolio-stock/entities/portfolio-stock.entity';
import { Trade } from 'src/core/trades/entities/trade.entity';
import { User } from 'src/core/users/entities/user.entity';

@Table
export class Portfolio extends Model<Portfolio> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @HasMany(() => PortfolioStock, 'portfolioId')
  portfolioStocks: PortfolioStock[];

  @HasMany(() => Trade, 'portfolioId')
  trades: Trade[];
}
