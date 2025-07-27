import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result, ResultDocument } from './schemas/result.schema';
import { CreateResultDto } from './dto/create-result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectModel(Result.name) private resultModel: Model<ResultDocument>,
  ) {}

  async create(dto: CreateResultDto): Promise<Result> {
    const created = new this.resultModel(dto);
    return created.save();
  }

  async findAll(): Promise<Result[]> {
    return this.resultModel.find().exec();
  }
}
