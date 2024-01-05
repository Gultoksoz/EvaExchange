import { IsDecimal, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsDecimal()
  @Min(0.00)
  balance: number;

    

}
