import { IsInt, IsString, Min } from "class-validator";

export class UpdatePatientBodyDto {
  @IsString()
  gender?: string;

  @IsInt()
  @Min(0)
  age?: number;

  @IsString()
  occupation?: string;
};
