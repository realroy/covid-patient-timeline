import { Field, InputType } from 'type-graphql';
import { Patience } from '@generated/type-graphql';

@InputType()
export default class AddPatientInputType implements Partial<Patience> {
  @Field({ nullable: true })
  gender?: string;
  
  @Field({nullable: true})
  age?: number;
  
  @Field({ nullable: true })
  occupation?: string;
}

export { AddPatientInputType }