import { FastifyInstance } from 'fastify';


export async function categoryRoutes(fastify: FastifyInstance) {
  fastify.get('/categories', async () => {
    // ... sua lógica de rota aqui
  });
}