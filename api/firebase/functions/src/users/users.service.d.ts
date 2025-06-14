import { PrismaService } from 'prisma/prisma.service';
import { User, CreateUserDto, type UpdateUserDto } from './dto/create-user-dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User | null>;
    createUser(data: CreateUserDto): Promise<{
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
    updateUser(id: string, data: Partial<UpdateUserDto>): Promise<{
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
    hashPassword(password: string): Promise<string>;
    removeLife(id: string): Promise<User>;
    addLife(id: string): Promise<User>;
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
    findUsersWithOneLife(): Promise<{
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
    }[]>;
}
