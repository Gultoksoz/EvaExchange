import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StocksService {

  constructor(
    @InjectModel(Stock)
    private readonly stockModel: typeof Stock,
  ) {}

  async createStock(createStockDto: CreateStockDto): Promise<Stock> {
    return await this.stockModel.create(createStockDto);
  }

  async updateStock(id: number, updateStockDto: UpdateStockDto): Promise<Stock> {
    const stock = await this.findStockById(id);
    return await stock.update(updateStockDto);
  }

  async findStockById(id: number): Promise<Stock> {
    const stock = await this.stockModel.findByPk(id);
    if (!stock) {
      throw new NotFoundException('Stock not found');
    }
    return stock;
  }

  async getAllStocks(): Promise<Stock[]> {
    return await this.stockModel.findAll();
  }

  async remove(id: number): Promise<void> {
    const stock = await this.findStockById(id);
    await stock.destroy();
  }
}
