import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';
import { OrderEntity } from './entity/order.entity';
import { OrderService } from './order.service';


@Controller('api/order')
export class OrderController {
   constructor(private orderService: OrderService) { }


   @UseGuards(JwtAuthGuard)
   @Post()
   async order(@Request() req): Promise<any> {
       return this.orderService.order(req.user.username)
   }

   @UseGuards(JwtAuthGuard)
   @Get()
   async getOrders(@Request() req): Promise<OrderEntity[]> {
       return await this.orderService.getOrders(req.user.username)
   }
}