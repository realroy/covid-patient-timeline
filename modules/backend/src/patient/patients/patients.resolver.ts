import { Injectable } from "@nestjs/common";
import { Resolver, Query } from "type-graphql";
import { PatientsRepository } from "./patients.repository";

@Injectable()
@Resolver()
export default class PatientsResolver {
  constructor(private readonly patientRepository: PatientsRepository) {}

  @Query(returns => String)
  async getMany() {
    return this.patientRepository.getMany()
  }

  // @Query(returns => String)
  // async create() {
  //   const count = await this.patientRepository.count()
  //   if (count >= 8) {
  //     throw new Error('patients reached limit')
  //   }

  //   return this.patientRepository.create()
  // }

  // @Query(returns => String)
  // async isExist(options: Partial<Patience>) {
  //   return this.patientRepository.isExist(options)
  // }
  
  // @Query(returns => String)
  // async updateById(id: string, data: Partial<Patience>) {
  //   return this.patientRepository.updateById(id, data)
  // }

  // @Query(returns => String)
  // async deleteById(id: string) {
  //   return this.patientRepository.deleteById(id)
  // }
}