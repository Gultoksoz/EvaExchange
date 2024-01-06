import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';


@Injectable()
export class SeedUser implements Seeder {
   constructor(
      @InjectModel(User)
      private readonly  userModel: typeof User,
    ) {}

  async seed(): Promise<any> {
    const userData = [
      {
         username: 'max',
         password: 'max_password',
      },
      {
         username: 'edy',
         password: 'edy_password',
      },
    ];
    return this.userModel.bulkCreate(userData);
  }

  async drop(): Promise<any> {
    return this.userModel.drop();
  }
}


