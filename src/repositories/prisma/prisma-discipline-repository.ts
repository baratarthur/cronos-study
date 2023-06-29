import { prisma } from '@/db/prisma'
import { type Discipline, type Prisma } from '@prisma/client'
import { type DisciplineRepository } from '../discipline-repository'

export class PrismaDisciplineRepository implements DisciplineRepository {
  async getAll (): Promise<Discipline[]> {
    const disciplines = await prisma.discipline.findMany({
      select: {
        id: true,
        name: true,
        categories: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    return disciplines
  }

  async create (data: Prisma.DisciplineCreateInput): Promise<Discipline> {
    return await prisma.discipline.create({ data })
  }

  async findById (disciplineId: string): Promise<Discipline | null> {
    return await prisma.discipline.findUnique({
      where: {
        id: disciplineId
      }
    })
  }
}
