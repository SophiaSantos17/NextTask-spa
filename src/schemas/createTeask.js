import { z, string, number } from 'zod';

export const TarefaSchema = z.object({
  titulo: string().min(3).refine((value) => value !== undefined, {
    message: 'O campo "titulo" é obrigatório.',
  }),
  descricao: string().min(3).optional().nullable(),
  data: string().nonempty("A Data da Tarefa é obrigatória"),
  status: number().optional(),
  prioridade: string().nonempty("A Prioridade da Tarefa é obrigatória"),
  tipo_tarefa: string().nonempty("O Tipo da Tarefa é obrigatório"),
});
