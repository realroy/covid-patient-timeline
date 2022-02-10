import { FC } from "react";
import { TimelineItem } from "./TimelineItem";
import { Flex, Box, Button } from "@chakra-ui/react";

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
  onAddTimelineClick: () => any
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
      <Box display="flex" alignItems={'center'} justifyContent="space-between">
        <Box fontWeight={"semibold"} fontSize="xl">
          Timelines
        </Box>
        <Button display={{ base: 'block', md: 'hidden' }} onClick={props.onAddTimelineClick}>+</Button>
      </Box>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Box
          textAlign={"center"}
          bgColor="yellow.300"
          m="3"
          p="3"
          width={180}
          textTransform={"capitalize"}
          borderRadius="md"
        >
          <Box
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontSize={"sm"}
          >
            {props.patientGender ? props.patientGender : "--"}
          </Box>
          <Box
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontSize={"2xl"}
          >
            {props.patientAge ? props.patientAge : "-"} years old
          </Box>
          <Box
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontSize={"sm"}
          >
            {props.patientOccupation ? props.patientOccupation : "--"}
          </Box>
        </Box>
      </Flex>

      <Box height={"30vh"} overflowY="scroll">
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
        <Box fontWeight={"semibold"}>Visited Places</Box>
        <Flex overflowX={"scroll"}>
          {visitedPlaces.map((visitedPlace) => (
            <Box
              key={visitedPlace}
              m="8px"
              bg="gray.100"
              borderRadius={"full"}
              p="1"
              my="2"
            >
              {visitedPlace}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
