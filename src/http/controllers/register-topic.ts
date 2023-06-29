import { CategoryNotFoudError } from '@/use-cases/errors/category-not-found-error'
import { makeRegisterTopicUseCase } from '@/use-cases/factories/make-register-topic-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerTopic (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const registerBodySchema = z.object({
    name: z.string(),
    categoryId: z.string()
  })

  const { name, categoryId } = registerBodySchema.parse(request.body)

  try {
    const useCase = makeRegisterTopicUseCase()
    await useCase.execute({ name, categoryId })
  } catch (error) {
    if (error instanceof CategoryNotFoudError) {
      return reply.status(404).send(error.message)
    }

    throw error
  }

  return reply.status(201).send()
}
