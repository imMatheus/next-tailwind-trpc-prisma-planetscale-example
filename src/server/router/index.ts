import * as trpc from '@trpc/server'
import { z } from 'zod'

import { prisma } from '@/server/utils/prisma'

export const appRouter = trpc.router().query('hello', {
	input: z.object({
		text: z.string()
	}),
	resolve: ({ input }) => {
		return {
			text: `Hello ${input.text}`
		}
	}
})

// export type definition of API
export type AppRouter = typeof appRouter
