import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PerformanceService } from './performance.service';

@ApiTags('Performance')
@Controller()
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get('accuracy-abacus/:level')
  @ApiParam({ name: 'level', example: 'level1' })
  getAccuracyAbacus(@Param('level') level: string) {
    return this.performanceService.getDataByLevel('accuracy_abacus', level);
  }

  @Get('accuracy-mentally/:level')
  @ApiParam({ name: 'level', example: 'level1' })
  getAccuracyMentally(@Param('level') level: string) {
    return this.performanceService.getDataByLevel('accuracy_mentally', level);
  }

  @Get('speed/:level')
  @ApiParam({ name: 'level', example: 'level1' })
  getSpeed(@Param('level') level: string) {
    return this.performanceService.getDataByLevel('speed', level);
  }
}
