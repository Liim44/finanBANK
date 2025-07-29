import { FastifyInstance } from 'fastify';


let transactions: Array<{
  id: string;
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
  categoria: string;
  data: string; // Ex: "YYYY-MM-DD"
}> = [
  { id: 't1', descricao: 'Salário', valor: 3000.00, tipo: 'entrada', categoria: 'Renda', data: '2025-07-01' },
  { id: 't2', descricao: 'Aluguel', valor: 1200.00, tipo: 'saida', categoria: 'Moradia', data: '2025-07-05' },
  { id: 't3', descricao: 'Compras', valor: 250.00, tipo: 'saida', categoria: 'Alimentação', data: '2025-07-10' }
];

// O `fastify` é a instância do Fastify, `opts` são opções (se houver), `done` é a callback para indicar que o plugin terminou
export async function transactionRoutes(fastify: FastifyInstance) {

  // Rota GET para obter todas as transações
  fastify.get('/transactions', async (request, reply) => {
    request.log.info('GET /api/transactions - Todas as transações solicitadas.');
    return reply.status(200).send(transactions);
  });

  // Rota GET para obter uma transação por ID
  fastify.get<{ Params: { id: string } }>('/transactions/:id', async (request, reply) => {
    const { id } = request.params;
    request.log.info(`GET /api/transactions/${id} - Transação específica solicitada.`);
    const transaction = transactions.find(t => t.id === id);

    if (transaction) {
      return reply.status(200).send(transaction);
    } else {
      return reply.status(404).send({ message: 'Transação não encontrada.' });
    }
  });

  // Rota POST para adicionar uma nova transação
  fastify.post<{ Body: { descricao: string; valor: number; tipo: 'entrada' | 'saida'; categoria: string; data: string; } }>(
    '/transactions',
    async (request, reply) => {
      request.log.info('POST /api/transactions - Tentativa de adicionar nova transação. Body:', request.body);
      const newTransactionData = request.body;

      // Validação básica
      if (!newTransactionData.descricao || typeof newTransactionData.valor !== 'number' || !newTransactionData.tipo) {
        return reply.status(400).send({ message: 'Campos "descricao", "valor" (número) e "tipo" são obrigatórios.' });
      }

      const newTransaction = {
        id: 't' + (transactions.length + 1).toString(), // Gerar ID simples
        ...newTransactionData
      };

      transactions.push(newTransaction);
      request.log.info('Nova transação adicionada:', newTransaction);
      return reply.status(201).send(newTransaction);
    }
  );

  // Rota PATCH para atualizar parcialmente uma transação
  fastify.patch<{ Params: { id: string }; Body: Partial<typeof transactions[0]> }>(
    '/transactions/:id',
    async (request, reply) => {
      const { id } = request.params;
      const updateData = request.body;
      request.log.info(`PATCH /api/transactions/${id} - Tentativa de atualização. Body:`, updateData);

      let transactionIndex = transactions.findIndex(t => t.id === id);

      if (transactionIndex !== -1) {
        transactions[transactionIndex] = { ...transactions[transactionIndex], ...updateData };
        request.log.info('Transação atualizada:', transactions[transactionIndex]);
        return reply.status(200).send(transactions[transactionIndex]);
      } else {
        return reply.status(404).send({ message: 'Transação não encontrada para atualização.' });
      }
    }
  );

  // Rota DELETE para excluir uma transação
  fastify.delete<{ Params: { id: string } }>('/transactions/:id', async (request, reply) => {
    const { id } = request.params;
    request.log.info(`DELETE /api/transactions/${id} - Tentativa de exclusão.`);

    const initialLength = transactions.length;
    transactions = transactions.filter(t => t.id !== id);

    if (transactions.length < initialLength) {
      request.log.info(`Transação ${id} excluída com sucesso.`);
      return reply.status(204).send(); // 204 No Content para exclusão bem-sucedida
    } else {
      return reply.status(404).send({ message: 'Transação não encontrada para exclusão.' });
    }
  });
}