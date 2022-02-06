import { Patience } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return this.prismaService.patience.findMany();
  }

  async create(data: Omit<Patience, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>) {
    return this.prismaService.patience.create({
      data,
    });
  }

  async count() {
    return this.prismaService.patience.count();
  }

  async isExist(options: Partial<Patience>) {
    const select = Object.keys(options).reduce(
      (prev, key) => ({ ...prev, [key]: true }),
      {},
    );

    return this.prismaService.patience.findFirst({
      select,
      where: options,
      rejectOnNotFound: true,
    });
  }

  updateById(id: string, data: Partial<Patience>) {
    return this.prismaService.patience.update({ where: { id }, data });
  }
  deleteById(id: string) {
    return this.prismaService.patience.delete({ where: { id } });
  }
}
