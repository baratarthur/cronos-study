import { DisciplineNotFoudError } from '@/use-cases/errors/discipline-not-found-error'
import { makeCategoryUseCase } from '@/use-cases/factories/make-register-category-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerCategory (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const registerBodySchema = z.object({
    name: z.string(),
    disciplineId: z.string()
  })

  const { name, disciplineId } = registerBodySchema.parse(request.body)

  try {
    const useCase = makeCategoryUseCase()
    await useCase.execute({ name, disciplineId })
  } catch (error) {
    if (error instanceof DisciplineNotFoudError) {
      return reply.status(404).send(error.message)
    }

    throw error
  }

  return reply.status(201).send()
}
