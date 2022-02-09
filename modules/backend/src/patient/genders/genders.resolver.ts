import { Injectable } from '@nestjs/common';
import { Query, Resolver } from 'type-graphql';
import { GenderTypeEnum } from '../enums';


@Injectable()
@Resolver()
export class GendersResolver {

  @Query((returns) => [[String, String]])
  genders() {
    return Object.entries(GenderTypeEnum)
  }
}