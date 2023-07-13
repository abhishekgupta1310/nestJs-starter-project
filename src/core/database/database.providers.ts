import { Sequelize } from 'sequelize-typescript';
import { Account } from '../../modules/accounts/account.entity';
import { Setting } from 'src/modules/settings/setting.entity';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME, DIALECT, SEQUELIZE } from '../constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: DIALECT,
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
      });
      sequelize.addModels([Account,Setting]);
      await sequelize.sync();
      return sequelize;
    },
  },
];