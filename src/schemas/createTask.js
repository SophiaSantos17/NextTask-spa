import z from 'zod';

export const TarefaSchema = z.object({
  titulo: z.string().min(3).refine((value) => value !== undefined, {
    message: 'O campo "titulo" é obrigatório.',
  }),
  descricao: z.string().min(3).optional().nullable(),
  data: z
    .date()
    .refine((value) => value !== undefined, {
      message: 'A Data é obrigatória.',
    }),
  status: z.number(),
  prioridade: z.string().refine((value) => value !== undefined, {
    message: 'A Prioridade é obrigatória.',
  }),
  tipo_tarefa: z.string().refine((value) => value !== undefined, {
    message: 'O Tipo é obrigatório.',
  }),
});
