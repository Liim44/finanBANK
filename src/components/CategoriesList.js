import React from 'react';
 import {
  ShoppingBasket,
  Utensils,
  Dumbbell,
  Film,
  DollarSign,
  Heart,
  Car,
  Book,
  Wifi,
  Zap,
  ShoppingCart,
  Fuel,
  Stethoscope,
  Laptop,
  Wrench,
  Tv,
  Shirt,
  Droplet,
 } from 'lucide-react';

 function CategoriesList({ categories }) {
  // Agrupar transações por categoria e somar os valores
  const gastosPorCategoria = categories.reduce((acc, transaction) => {
   if (transaction.type === 'expense') {
    const categoryName = transaction.category.name;
    if (!acc[categoryName]) {
     acc[categoryName] = { total: 0, quantidade: 0 };
    }
    acc[categoryName].total += transaction.amount;
    acc[categoryName].quantidade++;
   }
   return acc;
  }, {});

  // Converter para array para renderizar
  const categoriesArray = Object.entries(gastosPorCategoria).map(([nome, dados]) => ({
   nome,
   ...dados,
  }));

  const getCategoryIcon = (categoryName) => {
   switch (categoryName) {
    case 'Alimentação':
     return <ShoppingBasket className="category-icon" size={16} />;
    case 'Refeições':
     return <Utensils className="category-icon" size={16} />;
    case 'Saúde':
     return <Heart className="category-icon" size={16} />;
    case 'Lazer':
     return <Film className="category-icon" size={16} />;
    case 'Rendimentos':
     return <DollarSign className="category-icon" size={16} />;
    case 'Transporte':
     return <Car className="category-icon" size={16} />;
    case 'Educação':
     return <Book className="category-icon" size={16} />;
    case 'Utilidades':
     return <Zap className="category-icon" size={16} />;
    case 'Mercado':
     return <ShoppingCart className="category-icon" size={16} />;
    case 'Combustível':
     return <Fuel className="category-icon" size={16} />;
    case 'Farmácia':
     return <Stethoscope className="category-icon" size={16} />;
    case 'Cursos':
     return <Laptop className="category-icon" size={16} />;
    case 'Manutenção':
     return <Wrench className="category-icon" size={16} />;
    case 'Assinaturas':
     return <Tv className="category-icon" size={16} />;
    case 'Vestuário':
     return <Shirt className="category-icon" size={16} />;
    case 'Contas':
     return <Droplet className="category-icon" size={16} />;
    default:
     return null;
   }
  };

  return (
   <div className="categories-section">
    <h3>Categorias</h3>
    <ul className="categories-list">
     {categoriesArray.map(category => (
      <li key={category.nome}>
       {getCategoryIcon(category.nome)}
       <span>
        {category.nome} ({category.quantidade})
       </span>
       <strong>R$ {category.total.toFixed(2)}</strong>
      </li>
     ))}
    </ul>
   </div>
  );
 }

 export default CategoriesList;