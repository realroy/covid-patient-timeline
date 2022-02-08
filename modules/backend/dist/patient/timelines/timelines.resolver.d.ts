import { TimelinesService } from './timelines.service';
import { AddTimelineInputType } from './types';
export declare class TimelinesResolver {
    private readonly timelinesService;
    constructor(timelinesService: TimelinesService);
    timelines(patientId: string): Promise<import(".prisma/client").Timeline[]>;
    removeTimeline(id: string): Promise<import(".prisma/client").Timeline>;
    addTimeline(data: AddTimelineInputType): Promise<import(".prisma/client").Timeline>;
}
