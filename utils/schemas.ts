import * as z from 'zod'
import { ZodSchema } from 'zod'


export const profileSchema = z.object({
    firstName: z.string()
        .min(3)
        .max(15),
    lastName: z.string()
        .min(3,)
        .max(15),
    userName: z.string()
        .min(3)
        .max(15),
})