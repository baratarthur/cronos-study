import { PrismaDisciplineRepository } from '@/repositories/prisma/prisma-discipline-repository'
import { PrismaCategoryRepository } from '@/repositories/prisma/prisma-category-repository'
import { RegisterCategoryUseCase } from '../register-category'

export function makeCategoryUseCase (): RegisterCategoryUseCase {
  const disciplineRepo = new PrismaDisciplineRepository()
  const categoryRepo = new PrismaCategoryRepository()

  const useCase = new RegisterCategoryUseCase(categoryRepo, disciplineRepo)

  return useCase
}
