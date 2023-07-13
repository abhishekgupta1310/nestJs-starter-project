import { Sequelize } from 'sequelize-typescript';
import { Account } from '../../modules/accounts/account.entity';
import { Setting } from 'src/modules/settings/setting.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'appuser',
        password: 'password',
        database: 'accounts_db',
      });
      sequelize.addModels([Account,Setting]);
      await sequelize.sync();
      return sequelize;
    },
  },
];