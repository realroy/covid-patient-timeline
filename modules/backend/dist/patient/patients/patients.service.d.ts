import { Patience } from '.prisma/client';
import { PatientsRepository } from './patients.repository';
export declare class PatientsService {
    private readonly patientRepository;
    constructor(patientRepository: PatientsRepository);
    getMany(): Promise<import(".prisma/client").Patience[]>;
    getOneById(id: string): import(".prisma/client").Prisma.Prisma__PatienceClient<import(".prisma/client").Patience>;
    create(data: Omit<Patience, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>): Promise<import(".prisma/client").Patience>;
    isExist(options: Partial<Patience>): Promise<{}>;
    updateById(id: string, data: Partial<Patience>): Promise<import(".prisma/client").Patience>;
    deleteById(id: string): Promise<import(".prisma/client").Patience>;
}
