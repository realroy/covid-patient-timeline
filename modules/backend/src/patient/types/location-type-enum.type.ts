import { registerEnumType } from "type-graphql";
import { LocationTypeEnum } from "../enums";

registerEnumType(LocationTypeEnum, {
  name: "LocationType", // this one is mandatory
});