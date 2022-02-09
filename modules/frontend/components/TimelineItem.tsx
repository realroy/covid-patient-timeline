import { FC, MouseEventHandler } from "react";

export type TimelineItemProps = {
  from: string;
  to: string;
  detail: string;
  locationType: string;
  locationName: string;
  timelineId: string
  onDeleteClick?: (id: string) => any;
};

export const TimelineItem: FC<TimelineItemProps> = (props) => {
  const handleDeleteClick: MouseEventHandler = (_) => props.onDeleteClick?.(props.timelineId)
  
  return (
    <div>
      <div>
        {props.from} - {props.to}
      </div>
      <div>
        <div>{props.detail}</div>
        <div>
          <span>{props.locationType}</span>
          {props.locationName && <span>{`- ${props.locationName}`}</span>}
        </div>
      </div>
      <button onClick={handleDeleteClick}>&times;</button>
    </div>
  );
};
