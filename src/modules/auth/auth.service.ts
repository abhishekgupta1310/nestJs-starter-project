import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LOGIN_PASSWORD, LOGIN_USERNAME } from 'src/core/constants/usercredentials';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  async signIn(username:string, pass:string) {
    if (username !== LOGIN_USERNAME || pass !== LOGIN_PASSWORD) {
      throw new UnauthorizedException();
    }
    const payload = { username: username, sub: '1' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}