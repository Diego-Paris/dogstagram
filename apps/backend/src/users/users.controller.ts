import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';
import { User, Role } from '@prisma/client';
import * as argon from 'argon2';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Public()
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Public()
  @Get()
  findAll() {
    return this.usersService.findAll({});
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne({ id: +id });
  }

  @ApiBearerAuth()
  @Patch(':id')
  async update(
    @GetCurrentUserId() userId: number,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    const current_user: User = await this.usersService.findOne({ id: userId });
    const user_to_update: User = await this.usersService.findOne({ id: +id });

    if (!(current_user.id === +id || current_user.role === Role.ADMIN)) {
      throw new UnauthorizedException();
    }

    updateUserDto.deleted =
      current_user.role === Role.ADMIN
        ? updateUserDto.deleted
        : user_to_update.deleted;

    const hash = await argon.hash(updateUserDto.password);
    updateUserDto.password = hash;

    return this.usersService.update({
      where: { id: +id },
      data: updateUserDto,
    });
  }

  @ApiBearerAuth()
  @Delete(':id')
  async remove(@GetCurrentUserId() userId: number, @Param('id') id: string) {
    const current_user: User = await this.usersService.findOne({ id: userId });

    if (!(current_user.id === +id || current_user.role === Role.ADMIN)) {
      throw new UnauthorizedException();
    }

    return this.usersService.remove({ id: +id });
  }
}
