import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../auth/entity/user.entity';
import { CartService } from '../cart/cart.service';
import { CartEntity } from '../cart/entity/cartentity';
import { Products } from '../products/product.entity/product.entity';
import { ProductsService } from '../products/products.service';
import { OrderEntity } from './entity/order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Module } from '@nestjs/common';


@Module({
 imports: [TypeOrmModule.forFeature([OrderEntity, Products, CartEntity, Users])],
 controllers: [OrderController],
 providers: [OrderService, CartService, ProductsService]
})
export class OrderModule{}