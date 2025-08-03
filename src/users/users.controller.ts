import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiConsumes } from '@nestjs/swagger';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles('admin')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':username/username')
  @Roles('admin')
  async findByUsername(@Param('username') username: string): Promise<User | null> {
    return this.userService.findByUsername(username);
  }

  @Get(':id')
  @Roles('admin')
  async findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  @Roles('admin')
  @ApiConsumes('multipart/form-data')
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }

  @Patch(':id')
  @Roles('admin')
  @ApiConsumes('multipart/form-data')
  async update(
    @Param('id') id: string,
    @Body() updateData: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateData);
  }

  @Delete(':id')
  @Roles('admin')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.userService.delete(id);
  }

  @Get('me/profile')
  async getProfile(@Req() req) {
    return {
      username: req.user.username,
      role: req.user.role,
    };
  }
}
