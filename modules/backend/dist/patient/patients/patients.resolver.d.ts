import { PatientsService } from './patients.service';
import { AddPatientInputType, UpdatePatientInputType } from './types';
export declare class PatientsResolver {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    patients(): Promise<import(".prisma/client").Patience[]>;
    patient(id: string): Promise<import(".prisma/client").Patience>;
    addPatient(data: AddPatientInputType): Promise<import(".prisma/client").Patience>;
    updatePatient(data: UpdatePatientInputType): Promise<import(".prisma/client").Patience>;
    deletePatient(id: string): Promise<import(".prisma/client").Patience>;
}
