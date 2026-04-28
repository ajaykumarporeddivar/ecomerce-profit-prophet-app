'use client';

import AppSidebar from '@/components/layout/AppSidebar';
import AppHeader from '@/components/layout/AppHeader';
import DemoBanner from '@/components/layout/DemoBanner';
import { Lucide, Home, ChartBar, Calendar, Users, Gear } from 'lucide-react';
import clsx from 'clsx';
import tailwindMerge from 'tailwind-merge';

const navItems = [
  { label: 'Dashboard', icon: <Home />, href: '/dashboard' },
  { label: 'Profit Prediction', icon: <ChartBar />, href: '/dashboard/profit-prediction' },
  { label: 'Inventory Management', icon: <Calendar />, href: '/dashboard/inventory-management' },
  { label: 'Pricing Optimization', icon: <Users />, href: '/dashboard/pricing-optimization' },
  { label: 'Real-time Analytics', icon: <Gear />, href: '/dashboard/real-time-analytics' },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AppSidebar navItems={navItems} />
      <div className="flex-1 overflow-y-auto">
        <AppHeader />
        <DemoBanner />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;