import { Injectable } from "@nestjs/common";
import { Resolver, Query } from "type-graphql";

@Injectable()
@Resolver()
export default class AppResolver {
  @Query(returns => String)
  helloWorld() {
    return 'Hello World'
  }
}