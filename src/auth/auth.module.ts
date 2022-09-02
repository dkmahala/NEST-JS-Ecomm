import { Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { Users } from './entity/user.entity';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60m' },
        }),
        TypeOrmModule.forFeature([Users]), PassportModule,ConfigModule],
        exports:[ AuthService, JwtService,LocalStrategy],
       providers: [AuthService, JwtService, LocalStrategy],
       controllers: [AuthController]
})
export class AuthModule {

}
