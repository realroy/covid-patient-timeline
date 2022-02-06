import { TimelinesService } from './timelines.service';
export default class TimelinesResolver {
    private readonly timelinesService;
    constructor(timelinesService: TimelinesService);
    timelines(patientId: string): Promise<(string | import(".prisma/client").Timeline[])[][]>;
}
