import * as trpc from '@trpc/server'
import { z } from 'zod'

export const testRouter = trpc.router().query('hello', {
	input: z.object({
		name: z.string()
	}),
	resolve: ({ ctx }) => {
		console.log('hello from stash route')
		console.log(ctx)

		return {
			text: `Hello from stash`
		}
	}
})
