import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTask {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
