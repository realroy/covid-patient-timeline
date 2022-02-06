import { IsString } from "class-validator"

export class FindOneParamsDto {
  @IsString()
  id: string
}
