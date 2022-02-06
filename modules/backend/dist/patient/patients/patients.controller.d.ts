import { FindOneParamsDto } from '../dto';
import { UpdatePatientBodyDto } from './dto';
import { PatientsService } from './patients.service';
export declare class PatientsController {
    private readonly patientService;
    constructor(patientService: PatientsService);
    getAll(): Promise<import(".prisma/client").Patience[]>;
    create(): Promise<import(".prisma/client").Patience>;
    updateById(params: FindOneParamsDto, updatePatientDto: UpdatePatientBodyDto): Promise<import(".prisma/client").Patience>;
    deleteById(params: FindOneParamsDto): Promise<import(".prisma/client").Patience>;
}
