import React from 'react';
 import { format } from 'date-fns';

 function TransactionsTable({ transactions }) {
  return (
   <div className="transactions-table">
    <h3>Transações</h3>
    <table>
     <thead>
      <tr>
       <th>Descrição</th>
       <th>Tipo</th>
       <th>Valor</th>
       <th>Banco</th>
       <th>Data</th>
       <th>Parcelas</th>
      </tr>
     </thead>
     <tbody>
      {transactions.map(transaction => (
       <tr key={transaction.id}>
        <td>{transaction.description}</td>
        <td>{transaction.type}</td>
        <td className={transaction.type === 'income' ? 'positive' : 'negative'}>
         R$ {transaction.amount.toFixed(2)}
        </td>
        <td>{transaction.bank}</td>
        <td>{format(new Date(transaction.date), 'dd/MM/yyyy')}</td>
        <td>{transaction.installments || '-'}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  );
 }

 export default TransactionsTable;