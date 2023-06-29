import { type TopicRepository } from '@/repositories/topic-repository'
import { type Topic } from '@prisma/client'

interface GetTodaysTopicsResponse {
  topics: Topic[]
}

export class GetTodaysTopicsUseCase {
  constructor (
    private readonly topicsRepository: TopicRepository
  ) {}

  async execute (): Promise<GetTodaysTopicsResponse> {
    const topics = await this.topicsRepository.getTodayTopics()

    return {
      topics
    }
  }
}
