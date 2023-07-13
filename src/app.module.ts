import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './modules/accounts/accounts.module';
import { SettingsModule } from './modules/settings/settings.module';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AccountsModule,
    SettingsModule,
    DatabaseModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
