import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Timeline } from '@prisma/client';
import { PatientsRepository } from '../patients/patients.repository';
import { TimelineRepository } from './timelines.repository';

export type TimelinesServiceGetManyOptions = {
  patientId: string;
};

export type TimelinesCreateOptions = Omit<Timeline, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>

@Injectable()
export class TimelinesService {
  constructor(private readonly timelineRepository: TimelineRepository, private readonly patientRepository: PatientsRepository) {}
  
  deleteById(id: string) {
    return this.timelineRepository.deleteById(id);
  }
  
  create(args: TimelinesCreateOptions) {
    return this.timelineRepository.create(args);
  }

  async getMany(args: TimelinesServiceGetManyOptions) {
    // try {
    //   await this.patientRepository.isExist({ id: args.patientId })
    // } catch (error) {
    //   if (error.name === 'NotFoundError') {
    //     throw new NotFoundException()
    //   }

    //   throw error
    // }

    return this.timelineRepository.getMany(args);
  }
}
