export declare class UserProgressDto {
    userId: string;
    contentId: string;
    duration: number | null;
    exp?: number | null;
    hits: number | null;
    completedAt: Date | null;
}
export declare class CreateUserProgressDto {
    userId: string;
    contentId: string;
    exp?: number | null;
    duration?: number | null;
    hits?: number | null;
}
export declare class UpdateUserProgressDto {
    duration?: number | null;
    hits?: number | null;
    exp?: number | null;
    completedAt?: Date | null;
    constructor(partial: Partial<UpdateUserProgressDto>);
}
