import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class RegisterInput {
  @Field(() => String)
  email: string
  @Field(() => ID)
  uid: string
  @Field(() => String, { nullable: true })
  firstName?: string
  @Field(() => String, { nullable: true })
  lastName?: string
}
