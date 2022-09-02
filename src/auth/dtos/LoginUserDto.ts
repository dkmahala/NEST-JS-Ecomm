import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,  IsString } from "class-validator";

export class LoginUserDto{

    id: number;
    @ApiProperty()
    @IsString() //validation
    username: string;
    
    @ApiProperty()
    password: any;

    @ApiProperty()
    @IsEmail()
    email: string;
    
}