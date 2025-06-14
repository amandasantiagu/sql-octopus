export declare class ContentDto {
    id?: string;
    label: string;
    moduleId: string;
    completedAt?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    constructor(partial: Partial<ContentDto>);
}
export declare class CreateContentDto {
    label: string;
    duration: number;
    exp: number;
    constructor(partial: Partial<CreateContentDto>);
}
