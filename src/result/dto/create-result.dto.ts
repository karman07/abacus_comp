import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResultDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: [0, 1, 2], description: '0 = abacus, 1 = mentally, 2 = speed' })
  @IsString()
  type: string;

  @ApiProperty()
  @IsNumber()
  correct: number;

  @ApiProperty()
  @IsNumber()
  wrong: number;

  @ApiProperty()
  @IsNumber()
  left: number;
}
