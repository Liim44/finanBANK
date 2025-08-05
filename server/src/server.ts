
import { buildApp } from './app';
import { FastifyInstance } from 'fastify';

const start = async () => {
    let fastifyApp: FastifyInstance | undefined;

    try {
        fastifyApp = await buildApp();
        const port = parseInt(process.env.PORT || '3000', 10);
        await fastifyApp.listen({ port, host: '0.0.0.0' });
        console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    } catch (err) {
        console.error('❌ Erro fatal ao iniciar o servidor:', err);
        if (fastifyApp && fastifyApp.log) {
            fastifyApp.log.error(err);
        }
        process.exit(1);
    }
};

start();