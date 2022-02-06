import { Patience } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PatientsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getMany(): Promise<import(".prisma/client").Patience[]>;
    create(): Promise<import(".prisma/client").Patience>;
    count(): Promise<number>;
    isExist(options: Partial<Patience>): Promise<{}>;
    updateById(id: string, data: Partial<Patience>): import(".prisma/client").Prisma.Prisma__PatienceClient<import(".prisma/client").Patience>;
    deleteById(id: string): import(".prisma/client").Prisma.Prisma__PatienceClient<import(".prisma/client").Patience>;
}
