// src/app.ts
import Fastify from 'fastify';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import sensible from '@fastify/sensible';

import { categoryRoutes } from './routes/categories.routes';
// ... outras rotas que serão criadas

export async function buildApp() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors);
  await fastify.register(formbody);
  await fastify.register(sensible);

  // --- Rota de boas-vindas / health check ---
  fastify.get('/', async (request, reply) => {
    return { message: 'Bem-vindo à API FinanBANK!', status: 'online' };
  });

  // --- Rotas da API ---
  fastify.register(categoryRoutes, { prefix: '/api' });
  // fastify.register(bankRoutes, { prefix: '/api' });
  // fastify.register(transactionRoutes, { prefix: '/api' });

  return fastify;
}