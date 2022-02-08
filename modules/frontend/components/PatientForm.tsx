import { FC, MouseEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";

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
  const { gender = 'male', occupation = '', age = 0, patientId } = props
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PatientFormData>();

  useEffect(() => {
    setValue('gender', gender)
    setValue('occupation', occupation)
    setValue('age', age)
  }, [patientId, gender, occupation, age, patientId, setValue])
  
  return (
    <div>
      <div>
        <div>Patient Information</div>
        <button data-patient-id={props.patientId} onClick={props.onRemoveClick}>
          Remove Patient
        </button>
      </div>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <span>
          <label>Gender</label>

          <div>
            <select id="gender" {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </span>
        <span>
          <label>Age</label>

          <div>
            <input type="number" id="age" {...register("age")} />
          </div>
        </span>
        <span>
          <label htmlFor="occupation">Occupation</label>

          <div>
            <input type="text" id="occupation" {...register("occupation")} />
          </div>
        </span>

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};
