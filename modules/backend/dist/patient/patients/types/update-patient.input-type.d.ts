import { Patience } from '@generated/type-graphql';
export default class UpdatePatientInputType implements Partial<Patience> {
    id: string;
    gender?: string;
    age?: number;
    occupation?: string;
}
export { UpdatePatientInputType };
