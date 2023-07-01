import { prisma } from '@/db/prisma'
import { type Topic, type Prisma } from '@prisma/client'
import { type TopicRepository } from '../topic-repository'

export class PrismaTopicRepository implements TopicRepository {
  async create (data: Prisma.TopicCreateInput): Promise<Topic> {
    return await prisma.topic.create({ data })
  }

  async getTodayTopics (): Promise<Topic[]> {
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)

    const todaysTopics = prisma.topic.findMany({
      where: {
        OR: [
          {
            created_at: today
          },
          {
            firstRevision: today
          },
          {
            lastRevision: today
          }
        ]
      }
    })

    return todaysTopics
  }
}
