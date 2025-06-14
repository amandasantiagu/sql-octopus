export declare class ModuleDto {
    id?: string;
    label: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
export declare class CreateModuleDto {
    label: string;
    constructor(partial: Partial<CreateModuleDto>);
}
