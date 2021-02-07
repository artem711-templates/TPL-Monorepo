// PLUGINS IMPORTS //
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import admin from 'firebase-admin'

// EXTRA IMPORTS //
import { UserEntity } from '../../models'
import { UserService } from '../../services/user.service'
import { TypeORMConfig } from '../../config'
import { RegisterInput } from './dto/register.input'

/////////////////////////////////////////////////////////////////////////////

describe('UserResolver Unit test', () => {
  let service: UserService

  const input: RegisterInput = {
    firstname: 'Alexandro',
    lastname: 'Jefferson',
    email: 'tap.kap.tap@gmail.com',
    password: '12345678',
  }
  let data = {
    id: null,
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useClass: TypeORMConfig,
        }),
        TypeOrmModule.forFeature([UserEntity]),
        FirebaseAdminModule.forRootAsync({
          useFactory: () => ({
            credential: admin.credential.applicationDefault(),
          }),
        }),
      ],
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('user operations', () => {
    it('should return an account', async () => {
      const result = await service.register(input)
      const { id, ...obj } = result

      expect(obj).toEqual(input)
      data = { id }
    })

    it('should retrieve the created account', async () => {
      const result = await service.getProfile(data.id)
      expect(result).toEqual({ ...input, ...data })
    })
  })
})
