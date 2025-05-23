import { z } from "zod"

export const registerSchema = z
  .object({
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z
      .string()
      .min(10, { message: "Telefone inválido" })
      .max(15, { message: "Telefone muito longo" }),
    password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export type RegisterSchema = z.infer<typeof registerSchema>
