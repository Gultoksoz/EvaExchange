import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Portfolio } from 'src/core/portfolios/entities/portfolio.entity';

@Table
export class User extends Model<User> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ type: 'varchar', unique: true, allowNull: false })
  username: string;

  @Column({ type: 'varchar', allowNull: false })
  password: string;

  @Column({ type: 'decimal', defaultValue: 0.00 })
  balance: number;

  @HasOne(() => Portfolio, 'userId')
  portfolio: Portfolio;
}

