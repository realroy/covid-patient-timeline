import { FC, MouseEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";

export type TimelineFormData = {
  from: string;
  to: string;
  detail: string;
  locationType: string;
  locationName: string;
};

export type TimelineFormProps = {
  onSubmit?: (data: TimelineFormData) => any;
  locationTypes: [string, string][];
};

export const TimelineForm: FC<TimelineFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TimelineFormData>();

  const onSubmit = handleSubmit((data) => {
    data.to = data.from.replace(/\d[4]-\d[2]-\d[2]-T/, data.to)
    // data.to = new Date([data.from.toDateString(), data.to.toTimeString()].join(' '))

    props?.onSubmit?.(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <select id="location-type" {...register('locationType')}>
          {props.locationTypes.map(([key, value]) => (
            <option key={key} value={key}>
              {value}
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
