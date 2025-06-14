import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/dto/create-user-dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<{
        access_token: string;
        user: Omit<User, 'password'>;
    }>;
    validatePassword(password: string, hashedPassword: string): Promise<boolean>;
}
