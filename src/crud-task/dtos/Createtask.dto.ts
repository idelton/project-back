import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsEnum, IsNumber, IsString } from "class-validator";
import { TaskStatusEnum, TaskTypeEnum } from "@prisma/client";



export class CreateTaskDto {

    public static countTask: number = 0;

    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @IsEnum(TaskStatusEnum)
    @ApiProperty({ enum: TaskStatusEnum })
    status: TaskStatusEnum;
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    description?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    houseRoom: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    roomSurface: number;

    @IsNotEmpty()
    @IsEnum(TaskTypeEnum)
    @ApiProperty({ enum: TaskTypeEnum })
    type: TaskTypeEnum;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    projectAnnouncementId: number;

    

    // You may not need this field if it's only for internal counting.
    // If you do, consider making it optional.
    id?: number;

    constructor(
        name: string,
        status: TaskStatusEnum,
        description: string | undefined,
        houseRoom: string,
        roomSurface: number,
        type: TaskTypeEnum,
        projectAnnouncementId: number,
        projectAnnouncement: number,
    ) {
        this.name = name;
        this.status = status;
        this.description = description;
        this.houseRoom = houseRoom;
        this.roomSurface = roomSurface;
        this.type = type;
        this.projectAnnouncementId = projectAnnouncementId;
        
        this.id = CreateTaskDto.countTask++;
    }
}
