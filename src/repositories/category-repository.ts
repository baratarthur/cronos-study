import { type Category, type Prisma } from '@prisma/client'

export interface CategoryRepository {
  create: (data: Prisma.CategoryCreateInput) => Promise<Category>
  findBy: (categoryId: string) => Promise<Category | null>
  linkDiscipline: (disciplineId: string, categoryId: string) => Promise<Category | null>
}
