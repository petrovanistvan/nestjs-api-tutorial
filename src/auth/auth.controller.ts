import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return { msg: 'Hello' };
  }

  @Post('signin')
  signin() {
    return 'I am signing in';
  }
}
