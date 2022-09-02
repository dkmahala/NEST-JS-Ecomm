import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto{

    id: number;
    @ApiProperty()
    @IsString() //validation
    username: string;
    
    @ApiProperty()
    password: any;

    @ApiProperty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    address: string;

    @ApiProperty()
    role: string;
}