import * as trpc from '@trpc/server'
import { z } from 'zod'

import { prisma } from '@/server/utils/prisma'

export const appRouter = trpc.router()

// export type definition of API
export type AppRouter = typeof appRouter
