import { Module } from '@nestjs/common';
import { PatientsController } from './patients/patients.controller';
import { PatientsRepository } from './patients/patients.repository';
import { PatientsService } from './patients/patients.service';
import { TimelinesController } from './timelines/timelines.controller';
import { TimelineRepository } from './timelines/timelines.repository';
import { TimelinesService } from './timelines/timelines.service';

@Module({
  controllers: [PatientsController, TimelinesController],
  providers: [PatientsService, PatientsRepository, TimelinesService, TimelineRepository]
})
export class PatientModule {
}
