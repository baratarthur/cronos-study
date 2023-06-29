export class CategoryNotFoudError extends Error {
  constructor () {
    super('Category not found')
  }
}
