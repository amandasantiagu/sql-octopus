import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<{
        access_token: string;
        user: Omit<import("../users/dto/create-user-dto").User, "password">;
    }>;
}
