import { Injectable, Logger } from '@nestjs/common';
import { User } from 'src/core/users/entities/user.entity';

@Injectable()
export class UserSeederService {
  private logger = new Logger(UserSeederService.name)
  constructor() {}

  async seed() {
    const users = [
      { username: 'user1', password: 'pass1', balance: 100.00 },
    ];

    for (const userData of users) {
      await User.create(userData);
    }
    this.logger.log('Users seeded!')
  }
}
