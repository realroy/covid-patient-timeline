import { FC, MouseEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Text,
  Box,
  Textarea,
  Grid,
} from "@chakra-ui/react";

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
    watch,
    formState: { errors },
  } = useForm<TimelineFormData>();

  const onSubmit = handleSubmit((data) => {
    data.to = data.from.replace(/\d{2}:\d{2}$/, data.to);
    // data.to = new Date([data.from.toDateString(), data.to.toTimeString()].join(' '))

    props?.onSubmit?.(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Grid templateColumns="4fr 2fr" columnGap={"16px"}>
          <div>
            <FormLabel htmlFor="">From</FormLabel>
            <Input type="datetime-local" id="from" {...register("from")} />
          </div>
          <div>
            <FormLabel htmlFor="">To</FormLabel>
            <Input type="time" id="from" {...register("to", { min: new Date(watch('from')).toTimeString() })} />
          </div>
        </Grid>

        <FormLabel>Detail</FormLabel>
        <Textarea
          id="detail"
          cols={30}
          rows={10}
          {...register("detail")}
        ></Textarea>

        <Grid templateColumns="2fr 4fr" columnGap={"16px"}>
          <div>
            <FormLabel htmlFor="">Location Type</FormLabel>
            <Select id="location-type" {...register("locationType")} textTransform='capitalize'>
              {props.locationTypes.map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <FormLabel htmlFor="">Location Name</FormLabel>
            <Input type="text" {...register("locationName")} />
          </div>
        </Grid>
        <Box height={'32px'} />
        <Button type="submit" bg="teal" color="white">Add Entry +</Button>
      </form>
    </div>
  );
};
