import { Injectable, NotFoundException } from '@nestjs/common';
import  accuracyAbacusData from './data/accuracy_abacus';
import accuracyMentallyData  from './data/accuracy_mentally';
import  speedData from './data/speed';

@Injectable()
export class PerformanceService {
  private sources = {
    'accuracy_abacus': accuracyAbacusData,
    'accuracy_mentally': accuracyMentallyData,
    'speed': speedData,
  };

  getDataByLevel(type: keyof typeof this.sources, level: string) {
    const source = this.sources[type];
    const levelKey = level.toLowerCase();
    const data = source[levelKey];

    if (!data) {
      throw new NotFoundException(`No data found for ${type} at ${level}`);
    }

    return { level: levelKey, data };
  }
}
