import { Controller, Get, Post, Body } from '@nestjs/common';
import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create-result.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Result')
@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post()
  @ApiBody({ type: CreateResultDto })
  create(@Body() dto: CreateResultDto) {
    return this.resultService.create(dto);
  }

  @Get()
  findAll() {
    return this.resultService.findAll();
  }
}
