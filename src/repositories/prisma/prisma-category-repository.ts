import { prisma } from '@/db/prisma'
import { type Category, type Prisma } from '@prisma/client'
import { type CategoryRepository } from '../category-repository'

export class PrismaCategoryRepository implements CategoryRepository {
  async create (data: Prisma.CategoryCreateInput): Promise<Category> {
    return await prisma.category.create({ data })
  }

  async findBy (categoryId: string): Promise<Category | null> {
    return await prisma.category.findUnique({
      where: {
        id: categoryId
      }
    })
  }

  async linkDiscipline (disciplineId: string, categoryId: string): Promise<Category | null> {
    const category = await prisma.category.update({
      where: {
        id: categoryId
      },
      data: {
        discipline_id: disciplineId
      }
    })

    return category
  }
}
