import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsersService } from "src/modules/users/users.service";
import { CreateUserDto } from "src/modules/users/dto/create.dto";
import { User } from "src/modules/users/entities/user.entity";

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    async create(createUserDto: CreateUserDto):Promise<User>{
        return this.usersService.create(createUserDto)
    }
}