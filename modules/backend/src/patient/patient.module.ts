import { Module } from '@nestjs/common';
import { PatientsController } from './patients/patients.controller';
import { PatientsRepository } from './patients/patients.repository';
import { PatientsResolver } from './patients/patients.resolver';
import { PatientsService } from './patients/patients.service';
import { TimelinesController } from './timelines/timelines.controller';
import { TimelineRepository } from './timelines/timelines.repository';
import { TimelinesResolver } from './timelines/timelines.resolver';
import { TimelinesService } from './timelines/timelines.service';

@Module({
  controllers: [PatientsController, TimelinesController],
  providers: [
    PatientsService,
    PatientsRepository,
    TimelinesService,
    TimelineRepository,
    PatientsResolver,
    TimelinesResolver
  ],
})
export class PatientModule {}
