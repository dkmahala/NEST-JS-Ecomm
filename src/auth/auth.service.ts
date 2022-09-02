import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Users } from './entity/user.entity';
import { CreateUserDto } from './dtos/CreateUserDto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>, private jwt: JwtService) { }
    async signup(createUserDto: CreateUserDto): Promise<Users> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(createUserDto.password, salt);
        createUserDto.password = hash
        return await this.userRepository.save(createUserDto);
    }

    
    
    async validateUser(username: string, password: string): Promise<any> {
        const foundUser = await this.userRepository.findOneBy({ username });
        if (foundUser) {
            if (await bcrypt.compare(password, foundUser.password)) {
                const { password, ...result } = foundUser
                return result;
            }
 
            return null;
        }
        return null
 
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.id, role:user.role };
 
        return {
            access_token: this.jwt.sign(payload),
        };
   }

   findAll(): Promise <Users[ ]> {
    return this.userRepository.find();

    }

    findbyId(userId: number){
        return this.userRepository.findOne({where: {id:userId}});
    }
    delete(userId: number){
        return this.userRepository.delete(userId);
    }
    update( updateUserDto: CreateUserDto,  userId: number){
        return this.userRepository.update(userId,updateUserDto);
    }
}