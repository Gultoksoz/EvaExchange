import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Seeder, SeederModule } from 'nestjs-sequelize-seeder';

async function bootstrap() {
    NestFactory.createApplicationContext(SeederModule)
      .then(appContext => {
        const logger = appContext.get(Logger);
        const seeder = appContext.get(Seeder);
        seeder
          .seed()
          .then(() => {
            logger.debug('Seeding complete!');
          })
          .catch(error => {
            logger.error('Seeding failed!');
            throw error;
          })
          .finally(() => appContext.close());
      })
      .catch(error => {
        throw error;
      });
  }
  bootstrap();