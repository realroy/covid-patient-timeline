import { Field, InputType } from 'type-graphql';
import { Patience } from '@generated/type-graphql';

@InputType()
export default class UpdatePatientInputType implements Partial<Patience> {
  @Field()
  id: string

  @Field({ nullable: true })
  gender?: string;
  
  @Field({nullable: true})
  age?: number;
  
  @Field({ nullable: true })
  occupation?: string;
}

export { UpdatePatientInputType }