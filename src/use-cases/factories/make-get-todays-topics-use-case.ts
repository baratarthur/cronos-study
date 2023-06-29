import { GetTodaysTopicsUseCase } from '../get-todays-topics'
import { PrismaTopicRepository } from '@/repositories/prisma/prisma-topic-repository'

export function makeGetTodaysTopicsUseCase (): GetTodaysTopicsUseCase {
  const topicsRepo = new PrismaTopicRepository()
  const useCase = new GetTodaysTopicsUseCase(topicsRepo)

  return useCase
}
