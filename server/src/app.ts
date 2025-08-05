import Fastify from 'fastify';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import sensible from '@fastify/sensible';

import { categoryRoutes } from './routes/categories.routes';



export async function buildApp() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors);
  await fastify.register(formbody);
  await fastify.register(sensible);

  
  fastify.get('/', async (request, reply) => {
    return { message: 'Bem-vindo à API FinanBANK!', status: 'online' };
  });

 
  fastify.register(categoryRoutes, { prefix: '/api' });
  


  return fastify;
}