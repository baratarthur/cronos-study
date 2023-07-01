import { type CategoryRepository } from '@/repositories/category-repository'
import { type Topic } from '@prisma/client'
import { type TopicRepository } from '@/repositories/topic-repository'
import { CategoryNotFoudError } from './errors/category-not-found-error'

interface RegisterTopicRequest {
  name: string
  categoryId: string
}

interface RegisterTopicResponse {
  topic: Topic
}

export class RegisterTopicUseCase {
  constructor (
    private readonly topicRepository: TopicRepository,
    private readonly cateogryRepository: CategoryRepository
  ) {}

  async execute ({ name, categoryId }: RegisterTopicRequest): Promise<RegisterTopicResponse> {
    const category = await this.cateogryRepository.findBy(categoryId)

    if (category === null) {
      throw new CategoryNotFoudError()
    }

    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)

    const firstRevision = new Date(today.getTime() + this.transformDaysToMiliseconds(7))
    const lastRevision = new Date(today.getTime() + this.transformDaysToMiliseconds(30))

    const topic = await this.topicRepository.create({
      name,
      created_at: today,
      firstRevision,
      lastRevision,
      category: {
        connect: {
          id: categoryId
        }
      }
    })

    return {
      topic
    }
  }

  private transformDaysToMiliseconds (days: number): number {
    return days * 24 * 60 * 60 * 1_000
  }
}
