import { FC, MouseEventHandler } from "react";
import { CloseButton, Flex, Box } from "@chakra-ui/react";

export type TimelineItemProps = {
  from: string;
  to: string;
  detail: string;
  locationType: string;
  locationName: string;
  timelineId: string;
  onDeleteClick?: (id: string) => any;
};

export const TimelineItem: FC<TimelineItemProps> = (props) => {
  const handleDeleteClick: MouseEventHandler = (_) =>
    props.onDeleteClick?.(props.timelineId);
  const from = new Date(props.from).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });
  const to = new Date(props.to).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Flex alignItems="start" py="1">
      <Box mr="2" mt="1" fontSize={"xs"}>
        {from} - {to}
      </Box>
      <Flex flex="1" justifyContent="space-between">
        <Box>
          <Box fontWeight={'bold'}>{props.detail}</Box>
          <Box mt="1" fontSize={'sm'} fontWeight='semibold'>
            <Box as="span" textTransform={"capitalize"}>
              {props.locationType.toLowerCase()}
            </Box>
            {props.locationName && <span>{` - ${props.locationName}`}</span>}
          </Box>
        </Box>
        <CloseButton onClick={handleDeleteClick} sx={{ borderRadius: "50%" }} />
      </Flex>
    </Flex>
  );
};
