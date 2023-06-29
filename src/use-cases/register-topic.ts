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

    const firstRevision = new Date(Date.now() + this.transformDaysToMiliseconds(7))
    const lastRevision = new Date(Date.now() + this.transformDaysToMiliseconds(30))

    const topic = await this.topicRepository.create({
      name,
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
