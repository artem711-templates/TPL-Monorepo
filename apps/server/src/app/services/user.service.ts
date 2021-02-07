// # PLUGINS IMPORTS //
import { Injectable } from '@nestjs/common'

// # COMPONENTS IMPORTS //
import { UserEntity } from '../models'
import { PrismaService } from '../services/prisma.service'
import { RegisterInput } from '../routes/user/dto/register.input'

/////////////////////////////////////////////////////////////////////////////

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(id: string): Promise<UserEntity> {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async register(data: RegisterInput): Promise<UserEntity> {
    return await this.prisma.user.create({ data })
  }
}
