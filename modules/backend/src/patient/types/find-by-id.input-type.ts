import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FindByIdInputType {
  @Field()
  id: string
}