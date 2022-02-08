import { Field, InputType } from 'type-graphql';
import { Timeline } from '@generated/type-graphql';

@InputType()
export default class AddTimelineInputType implements Partial<Timeline> {
  @Field()
  from: Date;

  @Field()
  to: Date;

  @Field()
  detail: string;

  @Field()
  locationName: string;

  @Field()
  locationType: string;

  @Field()
  patienceId: string;
}

export { AddTimelineInputType };
