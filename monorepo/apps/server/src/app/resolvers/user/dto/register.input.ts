import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class RegisterInput {
  @Field(() => String)
  email: string
  @Field(() => String, { nullable: true })
  firstName?: string
  @Field(() => String, { nullable: true })
  lastName?: string
}
