import { DataSource } from "typeorm";

const dotenv = require('dotenv');
dotenv.config();

const databaseUrl =
  process.env.DATABASE_URL || 'postgres://postgres:123456@localhost:5432/smartcondo';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: databaseUrl,
  entities: [__dirname + '/dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/dist/migrations/**/*.js'],
});

export default AppDataSource;
