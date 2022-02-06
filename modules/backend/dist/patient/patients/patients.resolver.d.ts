import { PatientsRepository } from "./patients.repository";
export default class PatientsResolver {
    private readonly patientRepository;
    constructor(patientRepository: PatientsRepository);
    getMany(): Promise<import(".prisma/client").Patience[]>;
}
