import { Patience } from '@generated/type-graphql';
export default class AddPatientInputType implements Partial<Patience> {
    gender?: string;
    age?: number;
    occupation?: string;
}
export { AddPatientInputType };
