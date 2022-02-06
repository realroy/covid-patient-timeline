import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { FindOneParamsDto } from '../dto';
import { PatientsService } from '../patients/patients.service';
import { CreateTimelineDto } from './dto';
import { TimelinesService } from './timelines.service';

@Controller('patients/:id/timelines')
export class TimelinesController {
  constructor(private readonly timelinesService: TimelinesService) {}

  @Get()
  async getAll(@Param() params: FindOneParamsDto) {
    return this.timelinesService.getMany({ patientId: params.id });
  }

  @Post()
  create(@Param() params: FindOneParamsDto, @Body() body: CreateTimelineDto) {
    return this.timelinesService.create({ ...body, patienceId: params.id });
  }

  @Delete(':id')
  deleteById(@Param() params: FindOneParamsDto) {
    return this.timelinesService.deleteById(params.id);
  }
}
