// # PLUGINS IMPORTS //
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'

// # COMPONENTS IMPORTS //
import { UserResolver } from './user.resolver'
import { PrismaService, UserService } from '@server/services'

// # EXTRA IMPORTS //
import { AuthGuard } from '@server/shared/guards'

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
