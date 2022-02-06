import { Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Patience } from '@generated/type-graphql';

import { PatientsService } from './patients.service';
import { AddPatientInputType, UpdatePatientInputType } from './input-types';

@Injectable()
@Resolver()
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService) {}

  @Query((returns) => [Patience])
  async patients() {
    return this.patientsService.getMany();
  }

  @Mutation((returns) => Patience)
  async addPatient(@Arg('data') data: AddPatientInputType) {
    return this.patientsService.create({
      gender: data.gender,
      age: data.age,
      occupation: data.occupation,
    });
  }

  @Mutation((returns) => Patience)
  async updatePatient(@Arg('data') data: UpdatePatientInputType) {
    return this.patientsService.updateById(data.id, data);
  }

  @Mutation((returns) => Patience)
  async deletePatient(@Arg('id') id: string) {
    return this.patientsService.deleteById(id);
  }
}
