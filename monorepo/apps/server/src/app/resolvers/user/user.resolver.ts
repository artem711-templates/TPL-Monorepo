// PLUGINS IMPORTS //
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql'

// EXTRA IMPORTS //
import { UserEntity } from '@server/models'
import { PrismaService, UserService } from '@server/services'

import { RegisterInput } from './dto/register.input'

/////////////////////////////////////////////////////////////////////////////

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService
  ) {}

  /**
   * @param _id {string} ID of the user we want get
   * @returns {Promise<UserEntity>} User info we got from database
   */
  @Query(() => UserEntity || null)
  async getProfile(@Args('id') id: string): Promise<UserEntity | null> {
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
    @Context() context: any
  ) {
    const { email, uid } = context.req.user_credentials

    return {}
    return this.userService.register({ ...input, email, uid })
  }
}
