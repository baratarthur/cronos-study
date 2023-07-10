import { makeDeleteCategoryUseCase } from '@/use-cases/factories/make-delete-categoryuse-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteCategory (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const deleteParamsSchema = z.object({
    categoryId: z.string()
  })

  const { categoryId } = deleteParamsSchema.parse(request.params)

  const useCase = makeDeleteCategoryUseCase()
  await useCase.execute({ categoryId })

  return reply.status(200).send()
}
