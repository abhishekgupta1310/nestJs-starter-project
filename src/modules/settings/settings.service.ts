import { Injectable, Inject, BadRequestException } from '@nestjs/common';
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
    if (typeof payload.value !== payload.data_type) {
      throw new BadRequestException('Data type and value not matching')      
    }
    return this.settingsRepository.create<Setting>(payload);
  }

}
