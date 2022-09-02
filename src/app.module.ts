import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Users } from './auth/entity/user.entity';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { Products } from './products/product.entity/product.entity';
import { OrderEntity } from './order/entity/order.entity';
import { CartEntity } from './cart/entity/cartentity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'NestAPI',
    entities: [ Users, Products, OrderEntity,CartEntity],
    synchronize: false,
    
    autoLoadEntities:true,}),CartModule, ProductsModule,  OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
