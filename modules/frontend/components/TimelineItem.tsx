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
  const from = new Date(props.from).toLocaleTimeString();
  const to = new Date(props.to).toLocaleTimeString();

  return (
    <Flex justifyContent={"space-between"} alignItems="start">
      <Box flex="2" p="3">
        {from} - {to}
      </Box>
      <Flex flex="3" justifyContent="space-between" p="3">
        <Box>
          <div>{props.detail}</div>
          <div>
            <Box as="span" textTransform={"capitalize"}>
              {props.locationType.toLowerCase()}
            </Box>
            {props.locationName && <span>{`- ${props.locationName}`}</span>}
          </div>
        </Box>
        <CloseButton onClick={handleDeleteClick} sx={{ borderRadius: "50%" }} />
      </Flex>
    </Flex>
  );
};
