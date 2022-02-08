import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TimelinesCreateOptions } from './timelines.service';
import { TimelinesServiceGetManyOptions } from './timelines.service';

@Injectable()
export class TimelineRepository {
  constructor(private readonly prismaService: PrismaService) {}

  deleteById(id: string) {
    return this.prismaService.timeline.delete({ where: { id } });
  }
  create(args: TimelinesCreateOptions) {
    return this.prismaService.timeline.create({ data: args });
  }
  async getMany(args: TimelinesServiceGetManyOptions) {  
    const timelines = await this.prismaService.timeline.findMany({
      where: {
        patienceId: args.patientId,
      },
      orderBy: [
        {
          from: 'asc',
        },
      ],
    });

    return timelines

    // const dateSet = [
    //   ...new Set(timelines.map((timeline) => timeline.from.toDateString())),
    // ];

    // const result = dateSet.map((date) => [
    //   date,
    //   timelines.filter((timeline) => timeline.from.toDateString() === date),
    // ]);

    // console.log({result})
    // return result
  }
}
