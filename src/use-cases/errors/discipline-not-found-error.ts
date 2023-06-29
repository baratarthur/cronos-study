export class DisciplineNotFoudError extends Error {
  constructor () {
    super('Discipline not found')
  }
}
