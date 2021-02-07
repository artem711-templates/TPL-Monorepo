// PLUGINS IMPORTS //
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import { Test, TestingModule } from '@nestjs/testing'
import admin from 'firebase-admin'
import { PrismaService } from '../services/prisma.service'

// EXTRA IMPORTS //
import { UserService } from '../services/user.service'
import { RegisterInput } from '../routes/user/dto/register.input'

/////////////////////////////////////////////////////////////////////////////

function randomString(length: number) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

describe('UserResolver Unit test', () => {
  let service: UserService

  const input: RegisterInput = {
    firstname: 'Alexandro',
    lastname: 'Jefferson',
    email: `${randomString(4)}@gmail.com`,
    password: '12345678',
  }
  let data = {
    id: null,
    createdAt: null,
    updatedAt: null,
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
