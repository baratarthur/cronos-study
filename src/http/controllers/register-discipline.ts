import { makeDisciplineUseCase } from '@/use-cases/factories/make-register-discipline-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerDiscipline (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const registerBodySchema = z.object({
    name: z.string()
  })

  const { name } = registerBodySchema.parse(request.body)

  const useCase = makeDisciplineUseCase()
  await useCase.execute({ name })

  return reply.status(201).send()
}
