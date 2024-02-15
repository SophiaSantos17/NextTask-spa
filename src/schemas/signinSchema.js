import z from "zod";

export const signinSchema = z.object({
    email: z.string().nonempty("O email é obrigatório").email({message: "Email Inválido"}).toLowerCase(),
    password: z.string().min(6, "A senha precias ter no mínimo 6 caracteres").nonempty("A senha é obrigatória"),
})