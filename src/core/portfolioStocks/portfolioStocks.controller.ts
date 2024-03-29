import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortfolioStockService } from './portfolioStocks.service';

@Controller('portfolio-stock')
export class PortfolioStockController {
  constructor(private readonly portfolioStockService: PortfolioStockService) {}

  // @Post()
  // create(@Body() createPortfolioStockDto: CreatePortfolioStockDto) {
  //   return this.portfolioStockService.create(createPortfolioStockDto);
  // }

  // @Get()
  // findAll() {
  //   return this.portfolioStockService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.portfolioStockService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePortfolioStockDto: UpdatePortfolioStockDto) {
  //   return this.portfolioStockService.update(+id, updatePortfolioStockDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.portfolioStockService.remove(+id);
  // }
}
