import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';
import {UpdateResult, DeleteResult} from 'typeorm';

import { Products } from './product.entity/product.entity';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/products')
@ApiTags('Products')
export class ProductsController {
 constructor(private productsService: ProductsService) { }

 @UseGuards(JwtAuthGuard)
 @Get()
 async GetAll(): Promise<Products[]> {
   return await this.productsService.getAll();

 }

 @UseGuards(JwtAuthGuard)
 @Post()
 async Create(@Request() req, @Body() product: Products): Promise<Products> {
   return await this.productsService.create(product, req.user);
 }


 @UseGuards(JwtAuthGuard)
 @Get(':id')
 async GetOne(@Param('id', ParseIntPipe) id: number): Promise<Products> {
   return await this.productsService.getOne(id);

 }

 @UseGuards(JwtAuthGuard)
 @Put(':id')
 async Update(@Param() id: number, @Body() product: Products, @Request() req): Promise<UpdateResult> {
   return await this.productsService.update(id, product, req.user);

 }

 @UseGuards(JwtAuthGuard)
 @Delete(':id')
 async Delete(@Param('id', ParseIntPipe) id: number, @Request() req): Promise<DeleteResult> {
   return await this.productsService.delete(id, req.user);

 }
}