import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { PortfolioStock } from 'src/core/portfolioStocks/entities/portfolioStocks.entity';
import { Trade } from 'src/core/trades/entities/trade.entity';
import { User } from 'src/core/users/entities/user.entity';

@Table
export class Portfolio extends Model<Portfolio> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @HasMany(() => PortfolioStock)
  portfolioStocks: PortfolioStock[];

  @HasMany(() => Trade)
  trades: Trade[];
}



  
