import { Patience, Timeline as _Timeline } from '@generated/type-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

import { LocationTypeEnum } from '../enums';

@ObjectType()
export class Timeline extends _Timeline {}