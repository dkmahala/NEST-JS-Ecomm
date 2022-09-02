import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { Products } from './product.entity/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports:[ProductsService],
  imports: [TypeOrmModule.forFeature([ Products ])],
  


})
export class ProductsModule {}
