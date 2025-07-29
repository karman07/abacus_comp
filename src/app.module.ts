import { Module, Res } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { PerformanceModule } from './papers/performance.module';
import { ResultModule } from './result/result.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UserModule,
    PerformanceModule,
    ResultModule
  ],
})
export class AppModule {}
