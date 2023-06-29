import { type Topic, type Prisma } from '@prisma/client'

export interface TopicRepository {
  create: (data: Prisma.TopicCreateInput) => Promise<Topic>
  getTodayTopics: () => Promise<Topic[]>
}
