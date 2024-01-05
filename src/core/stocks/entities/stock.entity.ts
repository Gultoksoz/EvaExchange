//stock.model.ts
import { BelongsToMany, Column, HasMany, Model, Table, Unique } from 'sequelize-typescript';
import { PortfolioStock } from 'src/core/portfolio-stock/entities/portfolio-stock.entity';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';
import { Trade } from 'src/core/trades/entities/trade.entity';

@Table
export class Stock extends Model<Stock> {

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