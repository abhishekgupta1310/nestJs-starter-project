import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './modules/accounts/accounts.module';
import { SettingsModule } from './modules/settings/settings.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [
    AccountsModule,
    SettingsModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
