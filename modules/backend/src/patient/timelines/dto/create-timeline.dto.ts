import { IsDateString, IsEnum, IsString, MinLength, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';

export enum LocationTypeEnum {
  INDOOR = 'INDOOR',
  OUTDOOR = 'OUTDOOR',
  HOME = 'HOME',
  TRAVELLING = 'TRAVELLING',
}

export class CreateTimelineDto {
  @IsDateString()
  @Type(() => Date)
  from: Date;

  @IsDateString()
  @Type(() => Date)
  to: Date;

  @IsString()
  detail: string;

  @IsEnum(LocationTypeEnum)
  locationType: LocationTypeEnum;

  @IsString()
  @ValidateIf((o) => [LocationTypeEnum.INDOOR, LocationTypeEnum.OUTDOOR].includes(o.locationType))
  @MinLength(1)
  locationName: string;
}


