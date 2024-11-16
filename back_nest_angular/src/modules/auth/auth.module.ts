import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.dtrategy';

@Module({
  imports:[
    JwtModule.register({
      secret: "MI_CODIGO_SECRETO",
      signOptions:{expiresIn: '880s'}

    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
