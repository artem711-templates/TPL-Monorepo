// # PLUGINS IMPORTS //
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

// # COMPONENTS IMPORTS //

/////////////////////////////////////////////////////////////////////////////

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly firebaseAuth: FirebaseAuthenticationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    return await this.validate(ctx)
  }

  async validate(ctx: GqlExecutionContext) {
    // const req = ctx.getContext().req
    // const { token } = req.headers

    // const decoded = await this.firebaseAuth.verifyIdToken(token)
    // req.user_credentials = decoded
    return true
  }
}
