import { type DisciplineRepository } from '@/repositories/discipline-repository'
import { type Discipline } from '@prisma/client'

interface GetDisciplinesResponse {
  disciplines: Discipline[]
}

export class GetDisciplinesUseCase {
  constructor (
    private readonly disciplineRepository: DisciplineRepository
  ) {}

  async execute (): Promise<GetDisciplinesResponse> {
    const disciplines = await this.disciplineRepository.getAll()

    return {
      disciplines
    }
  }
}
