import React, { useState } from 'react';

const proteinFoods = [
  { id: 1, name: 'Pollo', proteina: 31, imagen: '/pollo.jpg' },
  { id: 2, name: 'Pescado', proteina: 22, imagen: '/pescado.jpg' },
  { id: 3, name: 'Tofu', proteina: 8, imagen: '/tofu.jpg' },
];

function Home() {
 
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Alimentos Ricos en Proteína</h1>
        {
          
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {proteinFoods.map(food => (
            <div
              key={food.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={food.imagen}
                alt={food.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700 mb-2">{food.name}</h3>
                <p className="text-gray-600">Proteína por 100g: {food.proteina}g</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
