import { IsDecimal, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateTradeDto {

    type: 'BUY' | 'SELL';

    price: number;

    quantity: number;
}
