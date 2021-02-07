// PLUGINS IMPORTS //
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import * as admin from 'firebase-admin'

// EXTRA IMPORTS //
import { GraphQLConfig } from './config'
import * as routes from './routes'

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
    ...Object.values(routes),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
