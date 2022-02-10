import { FC, MouseEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Flex,
  Select,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export type PatientFormData = {
  gender: string;
  age: number;
  occupation: string;
};

export type PatientFormProps = {
  patientId?: string;
  onSubmit: (data: PatientFormData) => any;
  onRemoveClick: MouseEventHandler;
} & Partial<PatientFormData>;

export const PatientForm: FC<PatientFormProps> = (props) => {
  const { gender = "male", occupation = "", age = 0, patientId } = props;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PatientFormData>({
    defaultValues: {
      gender: "male",
    },
  });

  useEffect(() => {
    setValue("gender", gender);
    setValue("occupation", occupation);
    setValue("age", age);
  }, [patientId, gender, occupation, age, patientId, setValue]);

  return (
    <Box p="2">
      <Flex alignItems={"center"} justifyContent="space-between">
        <Box fontSize={"xl"} fontWeight="semibold">
          Patient Information
        </Box>
        <Button
          data-patient-id={props.patientId}
          onClick={props.onRemoveClick}
          colorScheme="red"
          variant={"outline"}
        >
          Remove
        </Button>
      </Flex>
      <Box as="form" onSubmit={handleSubmit(props.onSubmit)} width="100%">
        <Box
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns="3fr 1fr 6fr"
          gap="8px"
          py="16px"
        >
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select id="gender" {...register("gender", { required: true })}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              id="age"
              {...register("age", { required: true, min: 0 })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="occupation">Occupation</FormLabel>
            <Input
              type="text"
              id="occupation"
              {...register("occupation", { required: true, minLength: 1 })}
            />
          </FormControl>
        </Box>
        <Button type="submit">Update</Button>
      </Box>
    </Box>
  );
};
