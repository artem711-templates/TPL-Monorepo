// PLUGINS IMPORTS //
import { Injectable } from '@nestjs/common'
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'
import { join } from 'path'

// EXTRA IMPORTS //
import directives from './directives'

/////////////////////////////////////////////////////////////////////////////

@Injectable()
export default class GraphQLConfig implements GqlOptionsFactory {
  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      autoSchemaFile: join(process.cwd(), 'apps/server/src/app/schema.gql'),
      sortSchema: true,
      schemaDirectives: directives,
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }
  }
}
