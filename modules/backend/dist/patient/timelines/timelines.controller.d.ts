import { FindOneParamsDto } from '../dto';
import { CreateTimelineDto } from './dto';
import { TimelinesService } from './timelines.service';
export declare class TimelinesController {
    private readonly timelinesService;
    constructor(timelinesService: TimelinesService);
    getAll(params: FindOneParamsDto): Promise<import(".prisma/client").Timeline[]>;
    create(params: FindOneParamsDto, body: CreateTimelineDto): import(".prisma/client").Prisma.Prisma__TimelineClient<import(".prisma/client").Timeline>;
    deleteById(params: FindOneParamsDto): import(".prisma/client").Prisma.Prisma__TimelineClient<import(".prisma/client").Timeline>;
}
