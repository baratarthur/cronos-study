import { makeGetTodaysTopicsUseCase } from '@/use-cases/factories/make-get-todays-topics-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'

export async function getTodaysTopics (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const useCase = makeGetTodaysTopicsUseCase()
  const topics = await useCase.execute()

  return reply.status(200).send(topics)
}
