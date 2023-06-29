import { type DisciplineRepository } from '@/repositories/discipline-repository'
import { type Discipline } from '@prisma/client'

interface RegisterDisciplineRequest {
  name: string
}

interface RegisterDisciplineResponse {
  discipline: Discipline
}

export class RegisterDisciplineUseCase {
  constructor (
    private readonly disciplineRepository: DisciplineRepository
  ) {}

  async execute ({ name }: RegisterDisciplineRequest): Promise<RegisterDisciplineResponse> {
    const discipline = await this.disciplineRepository.create({
      name
    })

    return {
      discipline
    }
  }
}
