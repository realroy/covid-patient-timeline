import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

import { FindOneParamsDto } from '../dto';
import { UpdatePatientBodyDto } from './dto';
import { PatientsService } from './patients.service';


@Controller('patients')
export class PatientsController {
  constructor(private readonly patientService: PatientsService) {}

  @Get()
  getAll() {
    return this.patientService.getMany()
  }

  @Post()
  create() {
    return this.patientService.create({ gender: '', age: 0, occupation: '' })
  }

  @Put(':id')
  @Patch(':id')
  updateById(@Param() params: FindOneParamsDto, @Body() updatePatientDto: UpdatePatientBodyDto) {
    return this.patientService.updateById(params.id, updatePatientDto)
  }

  @Delete(':id')
  deleteById(@Param() params: FindOneParamsDto) {
    return this.patientService.deleteById(params.id)
  }

}
