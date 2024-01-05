import { IsDecimal, IsNotEmpty, IsString, Length, Min } from 'class-validator';


export class CreateStockDto {

    @IsNotEmpty()
    @IsString()
    @Length(3)
    symbol: string;


    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2' })
    @Min(0.00)
    price: number;


}
