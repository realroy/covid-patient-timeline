import { Patience } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PatientsRepository } from './patients.repository';

@Injectable()
export class PatientsService {
  constructor(private readonly patientRepository: PatientsRepository) {}

  async getMany() {
    return this.patientRepository.getMany()
  }

  async create() {
    const count = await this.patientRepository.count()
    if (count >= 8) {
      throw new Error('patients reached limit')
    }

    return this.patientRepository.create()
  }

  async isExist(options: Partial<Patience>) {
    return this.patientRepository.isExist(options)
  }

  async updateById(id: string, data: Partial<Patience>) {
    return this.patientRepository.updateById(id, data)
  }

  async deleteById(id: string) {
    return this.patientRepository.deleteById(id)
  }
}
