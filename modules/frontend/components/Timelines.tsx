import { FC } from "react";
import { TimelineItem } from "./TimelineItem";
import { Flex, Box } from "@chakra-ui/react";

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

  const dates = [
    // @ts-ignore
    ...new Set(
      props.timelines.map((timeline) => new Date(timeline.from).toDateString())
    ),
  ];
  const dateGroupedTimelines = dates.map((date) => [
    date,
    props.timelines.filter(
      (timeline) => new Date(timeline.from).toDateString() === date
    ),
  ]);

  return (
    <Box p="4">
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Box textAlign={"center"} bgColor="yellow.300" p="3" textTransform={'capitalize'} borderRadius='md'>
          <div>{props.patientGender}</div>
          <div>{props.patientAge} years old</div>
          <div>{props.patientOccupation}</div>
        </Box>
      </Flex>

      <Box height={'30vh'} overflowY="scroll">
        {dateGroupedTimelines.map(([date, timelines]) => (
          <div key={date}>
            <div>{date}</div>
            {timelines.map((timeline: Timeline) => (
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
          </div>
        ))}
      </Box>
      <Box>
        <div>Visited Places</div>
        {visitedPlaces.map((visitedPlace) => (
          <span key={visitedPlace}>{visitedPlace}</span>
        ))}
      </Box>
    </Box>
  );
};
