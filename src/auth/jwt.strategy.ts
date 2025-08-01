// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, // Make sure this is defined!
    });
  }

  async validate(payload: any) {
    console.log('JWT Strategy - Payload:', payload);
    return {
      username: payload.username,
      role: payload.role,
    };
  }
}
