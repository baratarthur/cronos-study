import { type FastifyInstance } from 'fastify'
import { registerDiscipline } from './controllers/register-discipline'
import { getDisciplines } from './controllers/get-disciplines'
import { registerCategory } from './controllers/register-category'
import { registerTopic } from './controllers/register-topic'
import { getTodaysTopics } from './controllers/get-todays-topics'
import { deleteCategory } from './controllers/delete-category'

export async function appRoutes (app: FastifyInstance): Promise<void> {
  app.post('/discipline', registerDiscipline)
  app.get('/discipline', getDisciplines)

  app.post('/category', registerCategory)
  app.delete('/category/:categoryId', deleteCategory)

  app.get('/topic/todays', getTodaysTopics)
  app.post('/topic', registerTopic)
}
