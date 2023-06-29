import { PrismaCategoryRepository } from '@/repositories/prisma/prisma-category-repository'
import { PrismaTopicRepository } from '@/repositories/prisma/prisma-topic-repository'
import { RegisterTopicUseCase } from '../register-topic'

export function makeRegisterTopicUseCase (): RegisterTopicUseCase {
  const topicRepo = new PrismaTopicRepository()
  const categoryRepo = new PrismaCategoryRepository()

  const useCase = new RegisterTopicUseCase(topicRepo, categoryRepo)

  return useCase
}
