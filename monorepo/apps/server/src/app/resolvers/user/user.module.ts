// # PLUGINS IMPORTS //
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'

// # COMPONENTS IMPORTS //
import { UserResolver } from './user.resolver'
import { UserService } from '../../services/user.service'
import { PrismaService } from '../../services/prisma.service'

// # EXTRA IMPORTS //
import { AuthGuard } from '../../shared/guards/auth.guard'

/////////////////////////////////////////////////////////////////////////////

@Module({
  providers: [
    UserResolver,
    UserService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class UserModule {}
