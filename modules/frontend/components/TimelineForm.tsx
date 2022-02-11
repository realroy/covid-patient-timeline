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
  FormErrorMessage,
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

    props?.onSubmit?.(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Box
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns="4fr 2fr"
          columnGap={"16px"}
        >
          <FormControl isInvalid={!!errors.from}>
            <FormLabel htmlFor="">From</FormLabel>
            <Input
              type="datetime-local"
              id="from"
              {...register("from", { required: true })}
            />
            {errors.from && (
              <FormErrorMessage>From is required</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.to}>
            <FormLabel htmlFor="">To</FormLabel>
            <Input
              type="time"
              id="from"
              {...register("to", {
                min: new Date(watch("from")).toTimeString(),
                required: true,
              })}
            />
            {errors.to && <FormErrorMessage>To is required</FormErrorMessage>}
          </FormControl>
        </Box>

        <FormLabel>Detail</FormLabel>
        <Textarea
          id="detail"
          cols={30}
          rows={10}
          {...register("detail")}
        ></Textarea>

        <Box
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns="2fr 4fr"
          columnGap={"16px"}
        >
          <div>
            <FormLabel htmlFor="">Location Type</FormLabel>
            <Select
              id="location-type"
              {...register("locationType")}
              textTransform="capitalize"
            >
              {props.locationTypes.map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
          <FormControl isInvalid={errors.locationName}>
            <FormLabel htmlFor="">Location Name</FormLabel>
            <Input
              type="text"
              {...register("locationName", {
                required: ["INDOOR", "OUTDOOR"].includes(watch("locationType")),
              })}
            />
            {errors.locationName && (
              <FormErrorMessage>Location name is required</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box height={"32px"} />
        <Button
          type="submit"
          bg="teal"
          color="white"
          width={{ base: "100%", md: "auto" }}
        >
          Add Entry +
        </Button>
      </form>
    </div>
  );
};
