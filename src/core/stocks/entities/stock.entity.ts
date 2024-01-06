//stock.model.ts
import { AutoIncrement, BelongsToMany, Column, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { PortfolioStock } from 'src/core/portfolioStocks/entities/portfolioStocks.entity';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';
import { Trade } from 'src/core/trades/entities/trade.entity';

@Table
export class Stock extends Model<Stock> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column({ type: 'varchar', unique: true, allowNull: false })
  symbol: string;

  @Column({ type: 'decimal', allowNull: false })
  price: number;

  @BelongsToMany(() => Portfolio, () => PortfolioStock)
  portfolios: Portfolio[];

  @HasMany(() => Trade)
  trades: Trade[];
}