
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../auth/entity/user.entity';
import { Products } from '../products/product.entity/product.entity';
import { ProductsService } from '../products/products.service';
import { CartService } from './cart.service';
import { CartEntity } from './entity/cartentity';
import { CartController } from './cart.controller';

@Module({
 imports: [TypeOrmModule.forFeature([CartEntity, Products, Users])],
 providers: [CartService, ProductsService],
 controllers: [CartController],
})
export class CartModule {}
