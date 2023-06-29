import { PrismaDisciplineRepository } from '@/repositories/prisma/prisma-discipline-repository'
import { RegisterDisciplineUseCase } from '../register-discipline'

export function makeDisciplineUseCase (): RegisterDisciplineUseCase {
  const disciplineRepo = new PrismaDisciplineRepository()
  const useCase = new RegisterDisciplineUseCase(disciplineRepo)

  return useCase
}
