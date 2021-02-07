// PLUGINS IMPORTS //
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import * as admin from 'firebase-admin'

// EXTRA IMPORTS //
import * as resolvers from '@server/resolvers'
import { GraphQLConfig } from '@server/config'

/////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphQLConfig,
    }),
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.applicationDefault(),
      }),
    }),
    ...Object.values(resolvers),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
