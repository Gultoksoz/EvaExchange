import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedUser } from './users.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    SeederModule.forFeature([SeedUser])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
