import { Body, Controller, Get, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { Setting } from './setting.entity';
import { CreateSettingDTO } from './dto/setting.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getHello(): Promise<Setting[]> {
    return this.settingsService.getSettings();
  }

  @Post()
  createPost(@Body() body: CreateSettingDTO) : Promise<Setting> {
    return this.settingsService.createSetting(body);
  }

  
}
