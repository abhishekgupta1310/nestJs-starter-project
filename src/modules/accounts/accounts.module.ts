import { Module } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { accountsProviders } from './accounts.providers';
import { AccountsController } from './accounts.controller';

@Module({
  providers: [AccountsService, ...accountsProviders],
  controllers: [AccountsController],
})
export class AccountsModule {}