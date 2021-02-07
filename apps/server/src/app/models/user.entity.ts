// PLUGINS IMPORTS //
import { ObjectType, Field, ID } from '@nestjs/graphql'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  id: string
  @Field(() => String)
  email: string
  @Field(() => String)
  password: string
  @Field(() => String)
  firstname: string
  @Field(() => String)
  lastname: string

  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
}
