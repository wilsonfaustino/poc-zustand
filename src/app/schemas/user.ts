import { z } from 'zod'

export const userSchema = z.object({
  userName: z.string().min(2, 'Mínimo de 2 caracteres'),
})

export type User = z.infer<typeof userSchema>
