
import {z} from 'zod';

export const CreateUserSchema = z.object({
    name: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
    email: z.string()
})

export const SignInSchema = z.object({
    name: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
})

export const RoomSchema = z.object({
    room: z.string().min(3).max(20),
})