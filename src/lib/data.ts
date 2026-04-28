export const users = [
  {
    id: 1,
    email: 'john.doe@example.com',
    password: 'password123',
    role: 'admin',
  },
  {
    id: 2,
    email: 'jane.doe@example.com',
    password: 'password123',
    role: 'user',
  },
];

export const products = [
  {
    id: 1,
    userId: 1,
    name: 'Product 1',
    price: 19.99,
    inventory: 100,
  },
  {
    id: 2,
    userId: 1,
    name: 'Product 2',
    price: 9.99,
    inventory: 50,
  },
  {
    id: 3,
    userId: 2,
    name: 'Product 3',
    price: 29.99,
    inventory: 200,
  },
];

export const profitPredictions = [
  {
    id: 1,
    userId: 1,
    productId: 1,
    predictedProfit: 1000,
  },
  {
    id: 2,
    userId: 1,
    productId: 2,
    predictedProfit: 500,
  },
  {
    id: 3,
    userId: 2,
    productId: 3,
    predictedProfit: 2000,
  },
];