import { FastifyInstance } from 'fastify';
import { createCategory } from '../controllers/categories.controller';

// Função para registrar as rotas de categoria no Fastify
export async function categoryRoutes(fastify: FastifyInstance) {
  fastify.post('/categories', createCategory);
  // fastify.get('/categories', listCategories);
  // fastify.get('/categories/:id', getCategoryById);
  // fastify.patch('/categories/:id', updateCategory);
  // fastify.delete('/categories/:id', deleteCategory);
}