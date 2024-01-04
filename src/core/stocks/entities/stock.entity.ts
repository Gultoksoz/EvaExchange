//stock.model.ts
import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { PortfolioStock } from 'src/core/portfolio-stock/entities/portfolio-stock.entity';

@Table
export class Stock extends Model<Stock> {

  @Column({ type: 'varchar', unique: true, allowNull: false })
  symbol: string;

  @Column({ type: 'decimal', allowNull: false })
  price: number;

  @HasMany(() => PortfolioStock, 'stockId')
  portfolioStocks: PortfolioStock[];
}
