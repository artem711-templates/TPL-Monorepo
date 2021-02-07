// PLUGINS IMPORTS //
import { ObjectType, Field, ID } from '@nestjs/graphql'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  id: string
  @Field(() => String)
  firstName: string
  @Field(() => String)
  lastName: string

  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
}
