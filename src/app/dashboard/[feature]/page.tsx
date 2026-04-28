'use client';

import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { products, profits, inventory } from '@/lib/data';

const features = {
  'profit-prediction': {
    title: 'Profit Prediction Engine',
    description: 'A machine learning-based engine that analyzes historical sales data, market trends, and other factors to predict future profits.',
    tableHeaders: ['Product', 'Predicted Profit', 'Actual Profit'],
    tableData: products.map((product) => [product.name, product.predictedProfit, product.actualProfit]),
  },
  'inventory-management': {
    title: 'Inventory Management',
    description: 'A feature that allows store owners to track and manage their inventory levels, including automated alerts for low-stock items and suggestions for replenishment.',
    tableHeaders: ['Product', 'Quantity', 'Status'],
    tableData: inventory.map((item) => [item.productName, item.quantity, item.status]),
  },
  'pricing-optimization': {
    title: 'Pricing Optimization',
    description: 'A tool that analyzes market trends, competitor pricing, and customer behavior to suggest optimal prices for products.',
    tableHeaders: ['Product', 'Current Price', 'Optimal Price'],
    tableData: products.map((product) => [product.name, product.currentPrice, product.optimalPrice]),
  },
};

const FeaturePage = () => {
  const [feature, setFeature] = useState(null);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    const urlParts = window.location.pathname.split('/');
    const featureSlug = urlParts.pop();
    setSlug(featureSlug);
    setFeature(features[featureSlug]);
  }, []);

  if (!feature) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(features).map((key) => (
            <div
              key={key}
              className={twMerge(
                'bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200',
                'flex flex-col items-center justify-center'
              )}
            >
              <h2 className="text-lg font-bold mb-2">{features[key].title}</h2>
              <p className="text-sm text-gray-600">{features[key].description}</p>
              <button
                className={clsx(
                  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
                  'mt-4'
                )}
              >
                <a href={`/dashboard/${key}`}>
                  View More
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{feature.title}</h1>
      <p className="text-sm text-gray-600">{feature.description}</p>
      <table className="w-full table-auto mt-4">
        <thead className="bg-gray-100">
          <tr>
            {feature.tableHeaders.map((header) => (
              <th
                key={header}
                className="px-4 py-2 text-left text-sm font-bold text-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {feature.tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell) => (
                <td
                  key={cell}
                  className="px-4 py-2 text-left text-sm text-gray-600 border-b border-gray-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturePage;