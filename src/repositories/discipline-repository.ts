import { type Discipline, type Prisma } from '@prisma/client'

export interface DisciplineRepository {
  getAll: () => Promise<Discipline[]>
  create: (data: Prisma.DisciplineCreateInput) => Promise<Discipline>
  findById: (disciplineId: string) => Promise<Discipline | null>
}
