import { Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Timeline } from '@generated/type-graphql';

import { TimelinesService } from './timelines.service';
import { AddTimelineInputType } from './types';


@Injectable()
@Resolver()
export class TimelinesResolver {
  constructor(private readonly timelinesService: TimelinesService) {}

  @Query((returns) => [Timeline])
  async timelines(@Arg('patientId') patientId: string) {
    return this.timelinesService.getMany({ patientId });
  }

  @Mutation((returns) => Timeline)
  async removeTimeline(@Arg('id') id: string) {
    return this.timelinesService.deleteById(id)
  }

  @Mutation((returns) => Timeline)
  async addTimeline(@Arg('data') data: AddTimelineInputType) {
    return this.timelinesService.create(data)
  }

}
