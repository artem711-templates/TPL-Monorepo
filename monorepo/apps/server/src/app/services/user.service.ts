// # PLUGINS IMPORTS //
import { Injectable } from '@nestjs/common'
import { UserInputError } from 'apollo-server-express'

// # COMPONENTS IMPORTS //
import { UserEntity } from '@server/models'
import { RegisterInput } from '@server/resolvers/user/dto'
import { PrismaService } from './prisma.service'

/////////////////////////////////////////////////////////////////////////////

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(data: RegisterInput): Promise<UserEntity> {
    return await this.prisma.user.create({ data })
  }

  async getProfile(id: string): Promise<UserEntity | null> {
    try {
      return await this.prisma.user.findUnique({ where: { id } })
    } catch (error) {
      throw new UserInputError('User with given ID was not found')
    }
  }

  async _deleteUser(id: string) {
    return await this.prisma.user.delete({ where: { id } })
  }
}
