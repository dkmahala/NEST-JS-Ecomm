import { Controller, Request, Post, UseGuards, Body, Param, ParseIntPipe, Get, Delete, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/CreateUserDto';
import { Users } from './entity/user.entity';


@Controller('api/auth/')
@ApiTags('Users')
export class AuthController {
   constructor(private usersService: AuthService) { }
    
   @Get()
    getUsers(): any{
        return this.usersService.findAll();
    }
    //Find user by id
   @Get(':id')
   getbyId(@Param('id', ParseIntPipe) userId:number) {
        return this.usersService.findbyId(Number(userId));
   }

   @Post('signup')
   async signup(@Body() user: CreateUserDto): Promise<Users> {
       return this.usersService.signup(user);
   }

   @UseGuards(AuthGuard('local'))
   @Post('login')
   async login(@Request() req) {
       return this.usersService.login(req.user)
   }

   

   @Put(':id')
   update(@Body() updateUserDto: CreateUserDto, @Param()  userId: number ) {
    return this.usersService.update(updateUserDto,userId);
   }

   @Delete(':id')
   delete(@Param('id', ParseIntPipe) userId: number){
    return this.usersService.delete(userId);
   }
}