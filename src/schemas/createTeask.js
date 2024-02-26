import { z, string, number } from 'zod';

export const TarefaSchema = z.object({
  titulo: string().min(3).refine((value) => value !== undefined, {
    message: 'O campo "titulo" é obrigatório.',
  }),
  descricao: string().min(3).optional(),
  status: number().refine((value) => value === undefined || value === 0 || value === 1, {
    message: 'O campo "status" deve ser 0 ou 1.',
  }).optional(),
});
