import z from "zod";

export const signupSchema = z
    .object({
        name: z
        .string()
        .nonempty("O nome é obrigatório")
        .toLowerCase()
        .min(3, "O nome precisa ter no minímo 3 caracteres")
        .transform((name) => {
            return name
            .trim()
            .split(" ")
            .map((word) => {
                return word[0].toLocaleUpperCase().concat(word.substring(1));
            })
            .join(" ");
        }),
        email: z
        .string()
        .email("Email inválido.")
        .nonempty("O email é obrigatório.")
        .toLowerCase(),
        password: z
        .string()
        .min(6, "A senha precisa ter no minímo 6 caracteres")
        .nonempty("A senha é obrigatória")
    });
    
