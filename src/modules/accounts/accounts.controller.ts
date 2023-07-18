import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './account.entity';
import { CreateAccountDTO } from './dto/account.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAll(): Promise<Account[]> {
    return this.accountsService.getAccounts();
  }

  @Post()
  @UseGuards(AuthGuard)
  createAccount(@Body() body: CreateAccountDTO) : Promise<Account> {
    return this.accountsService.createAccount(body);
  }

}
