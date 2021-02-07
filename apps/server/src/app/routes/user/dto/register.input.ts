import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class RegisterInput {
  @Field(() => String)
  firstname: string
  @Field(() => String)
  lastname: string
  @Field(() => String)
  email: string
  @Field(() => String)
  password: string
}
