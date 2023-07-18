import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccountDTO {

  @IsNotEmpty()
  name: string;
}