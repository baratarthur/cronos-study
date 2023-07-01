import { DeleteCategoryUseCase } from '../delete-category'
import { PrismaCategoryRepository } from '@/repositories/prisma/prisma-category-repository'

export function makeDeleteCategoryUseCase (): DeleteCategoryUseCase {
  const categoryRepo = new PrismaCategoryRepository()
  const useCase = new DeleteCategoryUseCase(categoryRepo)

  return useCase
}
