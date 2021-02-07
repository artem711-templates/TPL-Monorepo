// PLUGINS IMPORTS //
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import { Test, TestingModule } from '@nestjs/testing'
import admin from 'firebase-admin'

// EXTRA IMPORTS //
import { PrismaService, UserService } from '@server/services'
import { RegisterInput } from '@server/resolvers/user/dto/register.input'

/////////////////////////////////////////////////////////////////////////////

describe('UserResolver Unit test', () => {
  let service: UserService

  const input: RegisterInput = {
    firstName: 'Alexandro',
    lastName: 'Jefferson',
  }

  let data = {
    id: '',
    createdAt: '' as string | Date,
    updatedAt: '' as string | Date,
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        FirebaseAdminModule.forRootAsync({
          useFactory: () => ({
            credential: admin.credential.applicationDefault(),
          }),
        }),
      ],
      providers: [UserService, PrismaService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('user operations', () => {
    it('should return an account', async () => {
      const result = await service.register(input)
      const { id, createdAt, updatedAt, ...obj } = result

      expect(obj).toEqual(input)
      data = { id, createdAt, updatedAt }
    })

    it('should retrieve the created account', async () => {
      const result = await service.getProfile(data.id)
      expect(result).toEqual({ ...input, ...data })
    })

    it('should delete the account', async () => {
      await service._deleteUser(data.id)
      const result = await service.getProfile(data.id)
      console.log(result)
      expect(result).toBeNull()
    })
  })
})
