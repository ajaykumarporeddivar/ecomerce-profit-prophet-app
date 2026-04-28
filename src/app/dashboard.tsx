'use client';

import { useState, useEffect } from 'react';
import { Link } from 'next/link';
import { AiOutlineWarning } from 'lucide-react';
import { clsx } from 'clsx';
import { users, products, profitPredictions } from '../lib/data';

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    console.log('Dashboard component mounted');
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={clsx(
              'bg-white py-4 px-6 rounded-lg shadow-md cursor-pointer',
              selectedProduct === product && 'bg-gray-200'
            )}
            onClick={() => handleProductSelect(product)}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {product.name}
            </h2>
            <p className="text-sm text-gray-600">
              Price: ${product.price}
            </p>
            <p className="text-sm text-gray-600">
              Inventory: {product.inventory}
            </p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Predicted Profit: ${profitPredictions.find(
              (prediction) => prediction.productId === selectedProduct.id
            ).predictedProfit}
          </h2>
        </div>
      )}
      <div className="mt-8">
        <Link
          href="/pricing"
          className="bg-black py-2 px-4 text-white rounded-lg hover:bg-gray-800"
        >
          View Pricing
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;