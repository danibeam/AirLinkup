import { CreateUserDto } from './dto/create.dto';
import { Injectable } from "@nestjs/common";
import { User } from "src/modules/users/entities/user.entity";

@Injectable()
export class UsersService {
    private readonly users:User[] = []

    create(user: CreateUserDto): User {
        this.users.push(user)
        return user
    }

    findAll(): User[] {
        return this.users
    }
}