import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UsersController } from './users.controller'; // ✅ Import controller

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController], // ✅ Add controller here
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
