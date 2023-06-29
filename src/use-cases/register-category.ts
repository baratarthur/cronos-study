import { type CategoryRepository } from '@/repositories/category-repository'
import { type DisciplineRepository } from '@/repositories/discipline-repository'
import { type Category } from '@prisma/client'
import { DisciplineNotFoudError } from './errors/discipline-not-found-error'

interface RegisterCategoryRequest {
  name: string
  disciplineId: string
}

interface RegisterCategoryResponse {
  category: Category
}

export class RegisterCategoryUseCase {
  constructor (
    private readonly cateogryRepository: CategoryRepository,
    private readonly disciplineRepository: DisciplineRepository
  ) {}

  async execute ({ name, disciplineId }: RegisterCategoryRequest): Promise<RegisterCategoryResponse> {
    const discipline = await this.disciplineRepository.findById(disciplineId)

    if (discipline === null) {
      throw new DisciplineNotFoudError()
    }

    const category = await this.cateogryRepository.create({
      name,
      discipline: {
        connect: {
          id: disciplineId
        }
      }
    })

    return {
      category
    }
  }
}
