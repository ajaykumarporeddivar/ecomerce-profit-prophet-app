interface User {
  id: string;
  email: string;
  role: string;
  createdAt: string;
  plan: string;
  avatar: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  inventory: number;
  createdAt: string;
}

interface Prediction {
  id: string;
  productId: string;
  prediction: number;
  confidence: number;
  createdAt: string;
}

interface PricingOptimization {
  id: string;
  productId: string;
  optimizedPrice: number;
  confidence: number;
  createdAt: string;
}

interface RealTimeAnalytics {
  id: string;
  sales: number;
  profits: number;
  customerBehavior: string;
  createdAt: string;
}

interface ProductPerformance {
  id: string;
  productId: string;
  performance: number;
  confidence: number;
  createdAt: string;
}

interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export { User, Product, Prediction, PricingOptimization, RealTimeAnalytics, ProductPerformance, ApiResponse, PaginatedResponse };