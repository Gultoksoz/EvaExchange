import { Module } from '@nestjs/common';
import { TradesService } from './trades.service';
import { TradesController } from './trades.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trade } from './entities/trade.entity';

@Module({
  imports: [SequelizeModule.forFeature([Trade])],
  controllers: [TradesController],
  providers: [TradesService],
})
export class TradesModule {}
