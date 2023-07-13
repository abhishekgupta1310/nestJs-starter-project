import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './account.entity';
import { CreateAccountDTO } from './dto/account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  getAll(): Promise<Account[]> {
    return this.accountsService.getAccounts();
  }

  @Post()
  createAccount(@Body() body: CreateAccountDTO) : Promise<Account> {
    return this.accountsService.createAccount(body);
  }

}
