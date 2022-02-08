import { PrismaService } from 'src/prisma/prisma.service';
import { TimelinesCreateOptions } from './timelines.service';
import { TimelinesServiceGetManyOptions } from './timelines.service';
export declare class TimelineRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    deleteById(id: string): import(".prisma/client").Prisma.Prisma__TimelineClient<import(".prisma/client").Timeline>;
    create(args: TimelinesCreateOptions): import(".prisma/client").Prisma.Prisma__TimelineClient<import(".prisma/client").Timeline>;
    getMany(args: TimelinesServiceGetManyOptions): Promise<import(".prisma/client").Timeline[]>;
}
