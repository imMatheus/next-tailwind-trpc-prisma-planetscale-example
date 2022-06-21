import * as trpc from '@trpc/server'
import type { AuthenticatedTrpcRouterContextType } from '@/server/utils/context'
import { testRouter } from './test'

// Merge your api routes here
export const appRouter = trpc.router<AuthenticatedTrpcRouterContextType>().merge('test.', testRouter)

// export type definition of API
export type AppRouter = typeof appRouter
