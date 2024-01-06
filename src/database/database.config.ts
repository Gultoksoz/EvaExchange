import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = process.env;

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: parseInt(POSTGRES_PORT, 10) || 5432,
  username: POSTGRES_USER ,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  autoLoadModels: true,
  synchronize: true,
  logging:false,
};
