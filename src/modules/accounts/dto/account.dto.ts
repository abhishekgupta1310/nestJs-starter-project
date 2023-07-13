import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccountDTO {
  _id?: number;

  @IsNotEmpty()
  name: string;
}