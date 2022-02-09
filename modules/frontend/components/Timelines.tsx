import { FC } from "react";
import { TimelineItem } from "./TimelineItem";

type Timeline = {
  id: string;
  from: string;
  to: string;
  detail: string;
  locationType: string;
  locationName: string;
};

export type TimelinesProps = {
  onTimelineDelete?: (id: string) => any;
  patientGender?: string;
  patientAge?: number;
  patientOccupation?: string;
  timelines: Timeline[];
};

const extractVisitedPlaces = (timelines: Timeline[]) =>
  timelines
    .filter((timeline) => !!timeline.locationName)
    .map((timeline) => timeline.locationName);

export const Timelines: FC<TimelinesProps> = (props) => {
  const visitedPlaces = extractVisitedPlaces(props.timelines);

  return (
    <div>
      <div>
        <div>{props.patientGender}</div>
        <div>{props.patientAge} years old</div>
        <div>{props.patientOccupation}</div>
      </div>

      {props.timelines.map((timeline) => (
        <TimelineItem
          key={timeline.id}
          from={timeline.from}
          to={timeline.to}
          locationName={timeline.locationName}
          locationType={timeline.locationType}
          detail={timeline.detail}
          timelineId={timeline.id}
          onDeleteClick={props?.onTimelineDelete}
        />
      ))}

      <div>Visited Places</div>
      {visitedPlaces.map((visitedPlace) => (
        <span key={visitedPlace}>{visitedPlace}</span>
      ))}
    </div>
  );
};
