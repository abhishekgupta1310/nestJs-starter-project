import { Module } from '@nestjs/common';

import { SettingsService } from './settings.service';
import { settingsProviders } from './settings.providers';
import { SettingsController } from './settings.controller';

@Module({
  providers: [SettingsService, ...settingsProviders],
  controllers: [SettingsController],
})
export class SettingsModule {}