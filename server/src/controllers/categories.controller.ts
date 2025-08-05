import { FastifyRequest, FastifyReply } from 'fastify';
import { CategoryService } from '../services/categories.service';

const categoryService = new CategoryService(); // Instância do seu serviço

export async function createCategory(request: FastifyRequest, reply: FastifyReply) {
  try {
    
    const { name } = request.body as { name: string };

    if (!name) {
      return reply.status(400).send({ message: 'O nome da categoria é obrigatório.' });
    }

    const newCategory = await categoryService.create(name);
    return reply.status(201).send(newCategory);
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    return reply.status(500).send({ message: 'Erro interno do servidor ao criar categoria.' });
  }
}

