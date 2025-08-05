import { PrismaClient } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export async function categoryRoutes(fastify: FastifyInstance) {
  fastify.get('/categories', async () => {});
}

export const prisma = new PrismaClient()