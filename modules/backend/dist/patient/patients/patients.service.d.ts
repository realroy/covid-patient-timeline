import { Patience } from '.prisma/client';
import { PatientsRepository } from './patients.repository';
export declare class PatientsService {
    private readonly patientRepository;
    constructor(patientRepository: PatientsRepository);
    getMany(): Promise<import(".prisma/client").Patience[]>;
    create(): Promise<import(".prisma/client").Patience>;
    isExist(options: Partial<Patience>): Promise<{}>;
    updateById(id: string, data: Partial<Patience>): Promise<import(".prisma/client").Patience>;
    deleteById(id: string): Promise<import(".prisma/client").Patience>;
}
