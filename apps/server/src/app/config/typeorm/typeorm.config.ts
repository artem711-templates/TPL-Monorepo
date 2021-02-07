// PLUGINS IMPORTS //
import { Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { getMetadataArgsStorage } from 'typeorm'

// EXTRA IMPORTS //
import { typeORM } from '../../environments'

/////////////////////////////////////////////////////////////////////////////

@Injectable()
export default class TypeORMConfig implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options: TypeOrmModuleOptions = {
      ...typeORM,
      type: 'mongodb',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: true,
      autoLoadEntities: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepConnectionAlive: true,
      logging: true,
    }
    return options
  }
}
