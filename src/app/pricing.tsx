'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { AiOutlineDollarCircle } from 'lucide-react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 9.99,
    },
    {
      id: 2,
      name: 'Pro',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 29.99,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h1>
      <div className="grid grid-cols-1 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={clsx(
              'bg-white py-4 px-6 rounded-lg shadow-md cursor-pointer',
              selectedPlan === plan && 'bg-gray-200'
            )}
            onClick={() => handlePlanSelect(plan)}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {plan.name}
            </h2>
            <p className="text-sm text-gray-600">
              <AiOutlineDollarCircle size={16} className="mr-1" />${plan.price}
            </p>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-8">
          <button
            className={clsx(
              'bg-black py-2 px-4 text-white rounded-lg hover:bg-gray-800 text-sm font-semibold'
            )}
          >
            Subscribe to {selectedPlan.name} plan
          </button>
        </div>
      )}
    </div>
  );
};

export default Pricing;