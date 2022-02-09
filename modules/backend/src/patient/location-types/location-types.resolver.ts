import { Injectable } from '@nestjs/common';
import { Query, Resolver } from 'type-graphql';
import { LocationTypeEnum } from '../enums';


@Injectable()
@Resolver()
export class LocationTypesResolver {

  @Query((returns) => [[String, String]])
  locationTypes() {
    return Object.entries(LocationTypeEnum)
  }
}