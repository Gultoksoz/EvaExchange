import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { SeedUser } from './users.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService, SeedUser],
  exports:[ SeedUser]
})
export class UsersModule {}
