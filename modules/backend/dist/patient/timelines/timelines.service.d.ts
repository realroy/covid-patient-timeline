import { Prisma, Timeline } from '@prisma/client';
import { PatientsRepository } from '../patients/patients.repository';
import { TimelineRepository } from './timelines.repository';
export declare type TimelinesServiceGetManyOptions = {
    patientId: string;
};
export declare type TimelinesCreateOptions = Omit<Timeline, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;
export declare class TimelinesService {
    private readonly timelineRepository;
    private readonly patientRepository;
    constructor(timelineRepository: TimelineRepository, patientRepository: PatientsRepository);
    deleteById(id: string): Prisma.Prisma__TimelineClient<Timeline>;
    create(args: TimelinesCreateOptions): Prisma.Prisma__TimelineClient<Timeline>;
    getMany(args: TimelinesServiceGetManyOptions): Promise<Timeline[]>;
}
