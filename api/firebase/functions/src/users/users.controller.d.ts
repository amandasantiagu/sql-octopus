import { UsersService } from './users.service';
import { CreateUserDto, type UpdateUserDto } from './dto/create-user-dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import("./dto/create-user-dto").User[]>;
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        exp: number;
        life: number;
        alreadyDoneTutorial: boolean;
        lastLifeLostAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        exp: number;
        life: number;
        alreadyDoneTutorial: boolean;
        lastLifeLostAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    completeTutorial(id: string): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        exp: number;
        life: number;
        alreadyDoneTutorial: boolean;
        lastLifeLostAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeLife(id: string): Promise<import("./dto/create-user-dto").User>;
    addLife(id: string): Promise<import("./dto/create-user-dto").User>;
    recoveryLife(id: string): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        exp: number;
        life: number;
        alreadyDoneTutorial: boolean;
        lastLifeLostAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addExp(id: string, exp: number): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        exp: number;
        life: number;
        alreadyDoneTutorial: boolean;
        lastLifeLostAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeExp(id: string, exp: number): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        exp: number;
        life: number;
        alreadyDoneTutorial: boolean;
        lastLifeLostAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
