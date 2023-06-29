import { makeGetDisciplinesUseCase } from '@/use-cases/factories/make-get-disciplines-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'

export async function getDisciplines (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const useCase = makeGetDisciplinesUseCase()
  const disciplines = await useCase.execute()

  return reply.status(200).send(disciplines)
}
