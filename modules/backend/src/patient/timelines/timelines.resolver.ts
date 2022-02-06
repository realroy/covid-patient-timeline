import { Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Patience } from '@generated/type-graphql';

import { TimelinesService } from './timelines.service';

@Injectable()
@Resolver()
export class TimelinesResolver {
  constructor(private readonly timelinesService: TimelinesService) {}

  @Query((returns) => [Patience])
  async timelines(@Arg('patientId') patientId: string) {
    return this.timelinesService.getMany({ patientId });
  }

}
