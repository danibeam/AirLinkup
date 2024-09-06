import { IsDate, IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsInt()
    readonly id: number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly password: string;
    @IsDate()
    readonly createdAt: Date;
    @IsDate()
    readonly updatedAt: Date;
}