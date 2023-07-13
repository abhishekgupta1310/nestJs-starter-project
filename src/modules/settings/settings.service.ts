import { Injectable, Inject } from '@nestjs/common';
import { Setting } from './setting.entity';
import { CreateSettingDTO } from './dto/setting.dto';

@Injectable()
export class SettingsService {

    constructor(
        @Inject('SETTINGS_REPOSITORY')
        private settingsRepository: typeof Setting
      ) {}
    
  getSettings(): Promise<Setting[]> {
    return this.settingsRepository.findAll<Setting>({include: [{model: Setting}]});
  }

  createSetting(payload: CreateSettingDTO): Promise<Setting> {
    
    return this.settingsRepository.create<Setting>(payload);
  }
}
