import React from 'react';
import { Pie } from 'react-chartjs-2';
 import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

 ChartJS.register(ArcElement, Tooltip, Legend);

 function CategoryPieChart({ data }) {
    // Verifica se os dados estão vazios
  const labels = data.map(item => item.category);
  const values = data.map(item => item.total);

  const chartData = {
   labels: labels,
   datasets: [
    {
     label: 'Gastos por Categoria',
     data: values,
     backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
     ],
     borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
     ],
     borderWidth: 1,
    },
   ],
  };

  const options = {
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
    legend: {
     position: 'bottom',
     labels: {
      fontColor: '#fff',
      fontSize: 14,
     },
    },
    tooltip: {
     bodyFont: {
      size: 14,
     },
     titleFont: {
      size: 16,
     },
    },
   },
  };

  return (
   <div className="chart-container">
    <Pie data={chartData} options={options} />
   </div>
  );
 }

 export default CategoryPieChart;