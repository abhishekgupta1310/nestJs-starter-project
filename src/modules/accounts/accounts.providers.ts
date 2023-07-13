import { ACCOUNTS_REPOSITORY } from 'src/core/constants';
import { Account } from './account.entity';

export const accountsProviders = [
  {
    provide: ACCOUNTS_REPOSITORY,
    useValue: Account,
  },
];