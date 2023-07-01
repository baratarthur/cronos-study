import { type CategoryRepository } from '@/repositories/category-repository'
import { type Category } from '@prisma/client'

interface DeleteCategoryRequest {
  categoryId: string
}

interface DeleteCategoryResponse {
  category: Category | null
}

export class DeleteCategoryUseCase {
  constructor (
    private readonly cateogryRepository: CategoryRepository
  ) {}

  async execute ({ categoryId }: DeleteCategoryRequest): Promise<DeleteCategoryResponse> {
    const category = await this.cateogryRepository.delete(categoryId)

    return {
      category
    }
  }
}
