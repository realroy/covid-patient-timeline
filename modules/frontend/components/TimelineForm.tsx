import { FC, MouseEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";

export type TimelineFormData = {
  from: Date;
  to: Date;
  detail: string;
  locationType: string;
  locationName: string;
};

export type TimelineFormProps = {
  onSubmit: (data: TimelineFormData) => any;
  locationTypes: string[];
};

export const TimelineForm: FC<TimelineFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TimelineFormData>();

  return (
    <div>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <label htmlFor="">From</label>
        <input type="datetime-local" id="from" {...register("from")} />

        <label htmlFor="">To</label>
        <input type="time" id="from" {...register("to")} />

        <label htmlFor="Detail"></label>
        <textarea
          id="detail"
          cols={30}
          rows={10}
          {...register("detail")}
        ></textarea>

        <label htmlFor="">Location Type</label>
        <select id="location-type">
          {props.locationTypes.map((locationType) => (
            <option key={locationType} value={locationType}>
              {locationType}
            </option>
          ))}
        </select>

        <label htmlFor="">Location Name</label>
        <input type="text" {...register("locationName")} />

        <input type="submit" value="Add Entry +" />
      </form>
    </div>
  );
};
