import { PrismaDisciplineRepository } from '@/repositories/prisma/prisma-discipline-repository'
import { GetDisciplinesUseCase } from '../get-disciplines'

export function makeGetDisciplinesUseCase (): GetDisciplinesUseCase {
  const disciplineRepo = new PrismaDisciplineRepository()
  const useCase = new GetDisciplinesUseCase(disciplineRepo)

  return useCase
}
