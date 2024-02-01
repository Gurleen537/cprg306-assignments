

import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 p-4 mb-2 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-600">{category}</p>
        </div>
        <span className="text-gray-700">{quantity} pcs</span>
      </div>
    </li>
  );
};

export default Item;
