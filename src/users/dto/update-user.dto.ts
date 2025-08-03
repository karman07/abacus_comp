// src/user/dto/update-user.dto.ts
import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  role?: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  level?: string;
}
