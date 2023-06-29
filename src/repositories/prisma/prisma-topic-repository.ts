import { prisma } from '@/db/prisma'
import { type Topic, type Prisma } from '@prisma/client'
import { type TopicRepository } from '../topic-repository'

export class PrismaTopicRepository implements TopicRepository {
  async create (data: Prisma.TopicCreateInput): Promise<Topic> {
    return await prisma.topic.create({ data })
  }

  async getTodayTopics (): Promise<Topic[]> {
    const todayStartDate = new Date()
    const todayFinishDate = new Date()

    todayStartDate.setHours(0)
    todayStartDate.setMinutes(0)
    todayStartDate.setMilliseconds(0)

    todayFinishDate.setHours(23)
    todayFinishDate.setMinutes(59)
    todayFinishDate.setMilliseconds(999)

    const todaysTopics = prisma.topic.findMany({
      where: {
        OR: [
          {
            created_at: {
              gte: todayStartDate,
              lte: todayFinishDate
            }
          },
          {
            firstRevision: {
              gte: todayStartDate,
              lte: todayFinishDate
            }
          },
          {
            lastRevision: {
              gte: todayStartDate,
              lte: todayFinishDate
            }
          }
        ]
      }
    })

    return todaysTopics
  }
}
