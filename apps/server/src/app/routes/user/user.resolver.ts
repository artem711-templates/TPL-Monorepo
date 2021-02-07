// PLUGINS IMPORTS //
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql'

// EXTRA IMPORTS //
import { UserEntity } from '../../models'
import { UserService } from '../../services/user.service'
import { RegisterInput } from './dto/register.input'

/////////////////////////////////////////////////////////////////////////////

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /**
   * @param _id {string} ID of the user we want get
   * @returns {Promise<UserEntity>} User info we got from database
   */
  @Query(() => UserEntity)
  async getProfile(@Args('id') id: string): Promise<UserEntity> {
    return await this.userService.getProfile(id)
  }

  /**
   * @param input {RegisterInput} input to create a new user in database
   * @param context ${Context} GraphQL Context
   * @returns {Promise<UserEntity>} returns the new User
   */
  @Mutation(() => UserEntity)
  async register(
    @Args('input')
    input: RegisterInput,
    @Context() context
  ): Promise<UserEntity> {
    console.log('dskjandsa')
    const user = context.req.user_credentials
    return this.userService.register(input)
  }
}
