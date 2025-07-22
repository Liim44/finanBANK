import { buildApp } from './app';
import { FastifyInstance } from 'fastify'; // Importe o tipo FastifyInstance

const start = async () => {
  let fastifyApp: FastifyInstance | undefined; // Declare a variável fora do try para garantir o escopo

  try {
    fastifyApp = await buildApp(); // Atribua a instância à variável de escopo mais amplo
    const port = parseInt(process.env.PORT || '3000', 10);
    await fastifyApp.listen({ port, host: '0.0.0.0' });
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  } catch (err) {
    // Sempre logue com console.error para garantir que o erro seja visto.
    console.error('❌ Erro fatal ao iniciar o servidor:', err);

    // Se a instância do Fastify já foi criada e possui o logger, use-o também.
    if (fastifyApp && fastifyApp.log) {
      fastifyApp.log.error(err);
    }
    process.exit(1);
  }
};

start();