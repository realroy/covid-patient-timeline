import { FC, MouseEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Flex, Select, Input } from "@chakra-ui/react";

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
  } = useForm<PatientFormData>();

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
          variant={'outline'}
        >
          Remove Patient
        </Button>
      </Flex>
      <Box as="form" onSubmit={handleSubmit(props.onSubmit)}>
        <Flex>
          <span>
            <label>Gender</label>

            <div>
              <Select id="gender" {...register("gender")}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </Select>
            </div>
          </span>
          <span>
            <label>Age</label>

            <div>
              <Input type="number" id="age" {...register("age")} />
            </div>
          </span>
          <span>
            <label htmlFor="occupation">Occupation</label>

            <div>
              <Input type="text" id="occupation" {...register("occupation")} />
            </div>
          </span>
        </Flex>
        <Button type="submit">Update</Button>
      </Box>
    </Box>
  );
};
