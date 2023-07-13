import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AUTH_SECRET } from 'src/core/constants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: AUTH_SECRET.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [
    AuthService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}