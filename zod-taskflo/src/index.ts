import {z}  from 'zod'

export const signup = z.object({
  name : z.string(),
  email : z.string().email(),
  password : z.string().min(8)
})

export type signupType = z.infer<typeof signup>

export const signin = z.object({
  email : z.string().email(),
  password : z.string().min(8)
})

export type signinType = z.infer<typeof signin>
