import { Timeline } from '@generated/type-graphql';
export default class AddTimelineInputType implements Partial<Timeline> {
    from: Date;
    to: Date;
    detail: string;
    locationName: string;
    locationType: string;
    patienceId: string;
}
export { AddTimelineInputType };
