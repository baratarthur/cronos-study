import fastify from 'fastify'
import cors from '@fastify/cors'

import { ZodError } from 'zod'
import { env } from './env'
import { appRoutes } from './http/routes'

export const app = fastify()

app.register(cors, {
  origin: ['http://localhost:5173']
})

app.register(appRoutes)

app.setErrorHandler((error, req, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation Error', issues: error.format() })
  }

  if (env.NODE_ENV === 'prd') {
    console.error(error)

    // usar Datadog / newrelic / sentry
  }

  return reply
    .status(500)
    .send({ message: 'Internal server error' })
})
