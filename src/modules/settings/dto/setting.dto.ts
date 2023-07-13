import { IsNotEmpty } from 'class-validator';

export class CreateSettingDTO {
  _id?: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  data_type: string;

  @IsNotEmpty()
  account_id: number;

  @IsNotEmpty()
  value: string;
}