import React from 'react';
import {
  ArrowDown,
  ArrowUp,
  Coins,
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

 function OverviewCard({ title, value, description, type }) {
  let icon;

  switch (type) {
   case 'income':
    icon = <ArrowUp className="overview-icon" size={24} color="#238636" />;
    break;
   case 'expense':
    icon = <ArrowDown className="overview-icon" size={24} color="#da3633" />;
    break;
   default:
    icon = <Coins className="overview-icon" size={24} color="#1f6feb" />;
  }

  return (
   <div className={`overview-card ${title.toLowerCase()}-card`}>
    {icon}
    <h3>{title}</h3>
    <p className="value">{value}</p>
    <p className="description">{description}</p>
   </div>
  );
 }

 function OverviewCards({ totalEntradas, totalSaidas, saldo }) {
  return (
   <div className="overview-section">
    <OverviewCard
     title="Entradas"
     value={`R$ ${totalEntradas.toFixed(2)}`}
     description="Somada todas as entradas do período."
     type="income"
    />
    <OverviewCard
     title="Saídas"
     value={`R$ ${totalSaidas.toFixed(2)}`}
     description="Somada todas as saídas do período."
     type="expense"
    />
    <OverviewCard
     title="Balanço"
     value={`R$ ${saldo.toFixed(2)}`}
     description="Somada todas as entradas e saídas do período."
     type={saldo >= 0 ? 'income' : 'expense'}
    />
   </div>
  );
 }

 export default OverviewCards;