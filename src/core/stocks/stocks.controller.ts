import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  async create(@Body() createStockDto: CreateStockDto): Promise<Stock>  {
    return await this.stocksService.createStock(createStockDto);
  }

  
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateStockDto: UpdateStockDto): Promise<Stock> {
    return await this.stocksService.updateStock(id, updateStockDto);
  }

  @Get(':id')
  async getStockById(@Param('id') id: number): Promise<Stock> {
    return await this.stocksService.findStockById(id);
  }

  @Get()
  async getAllStocks(): Promise<Stock[]> {
    return await this.stocksService.getAllStocks();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stocksService.remove(+id);
  }
}
