import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateSettingDTO {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  data_type: string;

  @IsNumber()
  @Min(1)
  account_id: number;

  @IsNotEmpty()
  value: any;
}