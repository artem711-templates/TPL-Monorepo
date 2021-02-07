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
        credential: admin.credential.cert({
          type: process.env.FIREBASE_CONFIG_TYPE,
          project_id: process.env.FIREBASE_CONFIG_PROJECT_ID,
          private_key_id: process.env.FIREBASE_CONFIG_PRIVATE_KEY_ID,
          private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtv4cdIJnbIGHX\nTwHgsrCB5MNkFCMKi9W46sDliLbejYcF+SYWUM0xRLAaKAN8sIHC8an9v/6JJgJj\ninTnOrWFs6AhpdQGL7acTYBJJCsOweVGKEvY/ODogIOChHWNx3zsgIBSUFBXQ4ab\n+6Sy0vRtsfJtBSflpcJy1n1vxGooeIt+Bl0gopfWFgw1+uHMJBBiMEGTPjdy6JXl\nEc+IL5o7a0mRZIKURcrrrHff4MBiUdU3S5RZw/6r2cRsSyVNO38Ozws1TviYYe4i\nmIivNUr5OuceU9B0lv6g9IBcxgEBdBrwWfXCP/yYiAsG8RewTl65wl0qbyKUHnGk\nlVD2pLg3AgMBAAECggEALB11MPAWII0YSpLE50h3iIONGNwECal3mnwAfkc4J0nH\n/rxD72aUsu29yOZf/EjUqaqyfrtA5ZHBCYUeKZe+fzQcdG6mZuu2cfk7mVaVmCmj\nDS0uFOogMOhwe7MmJdmA3ovCCSRbQczjYLeEGeN2LGQCKawldSmhNYdAUiCM07lb\n/9EizUPUAR7vKYH7nGd2eNkoFNytLgH0UMGt+qHen6FakHGmtC9b9/wkcKv6G+0q\nwaezNssvCZTJ0MmDp8w4R7Al/M45JWv6dfF3uxZlDhV6NR9YNpx5+WBx1fW/gdND\npZmTgnMoPkIeo0os37db2wnmlNgDJdzvxiNEcWVIAQKBgQDqW67A14j99SlNe6tc\nJAvkYpBdmqInNErdVUDfZE45QC9Ev4RAp+Fx3pixRu1UjIfv2ENj7m2jPa+oFR/Y\nl7j3Ez7CZkORy39ZzzOnosdqUaunvSgBjMLaecpWWLE4+NGHOy7DcooKR6PpTtqq\nE7OSGnkc4uxMlkW1sWxSRqjV9QKBgQC9ywBuholV3S/w0DNhvjNzYNxuGAtLKDq7\nOk78/zSuvjBK8i4tpiUVfe/kblwd7cy/PElYUcMRQ8Rlm8t6OjBQibX7UTH0xmf/\nIIC68pylBDKQ8IgoKvTe5Mn92xpb2w3Q3RagKDk6atLy3dwWUjN7mcg91k1MLZli\ny3uKL1eN+wKBgQDKpJQqszQFQ+N+2ByIA7M0u/VQutDTTWgekgUSJM1uu40jyOY2\ncfOCXpNxVn8IyKsSPNGoqxWqPUCR+hIbWrXZDo8J0RtECc4Ifh2QKjR8PjpLREg/\nbtNdzkmi9/Xl6WBjqkz5OyUZVnDo4AI7ZeWzw6hNzfm9D4MfZFbhna+HsQKBgG1A\nFr6IqTOJAFixsHIaR4mp/xlMs+uOe8hcty1BRrUz+56Yq+ZRFlW5ycaHlHUR9uM6\nM8ooPo6IoNwQg1+XcUpbCytgwM3zC9g7gH6cu3jt4qG2I9pjZ9OKhY+geRrZDKnn\nKmgE33R2G3n8Jf2fUc1bZ33ZB2PLd9j74uBXgiHTAoGAchoybwXG2JZUOPsHbCtt\nPVyDmzu620ltheXMAn4aIRfCHP0K3J7FusIYoRCxeNWdcYb0L16RV2BEHRHhtny/\nbJJ1NiLNCx2L8xYtr0TtO2tUZ24ugA8565o7Vn08EJs4gD/0hC/uJxZXcMDXKnde\nBKX/hrhcjsnTWhXoPVYdaCY=\n-----END PRIVATE KEY-----\n`,
          client_email: process.env.FIREBASE_CONFIG_CLIENT_EMAIL,
          client_id: process.env.FIREBASE_CONFIG_CLIENT_ID,
          auth_uri: process.env.FIREBASE_CONFIG_AUTH_URI,
          token_uri: process.env.FIREBASE_CONFIG_TOKEN_URI,
          auth_provider_x509_cert_url:
            process.env.FIREBASE_CONFIG_AUTH_PROVIDER,
          client_x509_cert_url: process.env.FIREBASE_CONFIG_CERT_URL,
        } as any),
      }),
    }),
    ...Object.values(resolvers),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
