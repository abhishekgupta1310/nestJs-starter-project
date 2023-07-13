import { Injectable, Inject } from '@nestjs/common';
import { CreateAccountDTO } from './dto/account.dto';
import { Account } from './account.entity';

@Injectable()
export class AccountsService {

  constructor(
    @Inject('ACCOUNTS_REPOSITORY')
    private accountsRepository: typeof Account
  ) {}

  getAccounts(): Promise<Account[]> {
    return this.accountsRepository.findAll<Account>();
  }

  createAccount(payload: CreateAccountDTO): Promise<Account> {
    var accountPromise:Promise<Account> = this.accountsRepository.findOne<Account>({where: { name: payload.name}})
    const account = accountPromise.then((account) => {
      if (account != null) {
        return account
      } else {
        return this.accountsRepository.create<Account>(payload)
      }
    })
    return account
  }
}
