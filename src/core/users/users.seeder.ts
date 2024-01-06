import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { User } from './entities/user.entity';
@Seeder({
   model: typeof User,
   unique: ['username', 'password'],
})
export class SeedUser implements OnSeederInit {
   run() {
      const data = [
         {
            username: 'max',
            password: 'max_password',
         },
         {
            username: 'edy',
            password: 'edy_password',
         },
      ];
      return data;
   }

}