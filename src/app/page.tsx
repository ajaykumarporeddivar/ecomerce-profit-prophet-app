import type { NextPage } from 'next';
import { AiOutlineArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const HomePage: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 md:py-24 lg:px-8">
      {/* HERO SECTION */}
      <section className="relative block bg-white shadow-md">
        <div className="px-4 py-12 md:px-6 lg:py-24">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Unlock Your E-commerce Profit Potential
          </h1>
          <p className="mt-4 text-lg text-gray-500 sm:mt-6 sm:text-2xl">
            Predict and optimize your profits with our innovative platform
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="/dashboard"
              className={twMerge(
                'inline-flex items-center px-6 py-3 border border-transparent',
                'text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700',
                'md:py-4 md:text-lg md:px-10'
              )}
            >
              Get Started Free →
            </a>
            <a
              href="/dashboard"
              className={twMerge(
                'inline-flex items-center px-6 py-3 border border-transparent',
                'text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200',
                'md:py-4 md:text-lg md:px-10 ml-4'
              )}
            >
              See Demo →
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-64 w-full bg-indigo-100" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <AiOutlineArrowRight className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">Profit Prediction Engine</h3>
              <p className="mt-2 text-base text-gray-500">Predict your profits with our machine learning-based engine</p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <AiOutlineArrowRight className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">Inventory Management</h3>
              <p className="mt-2 text-base text-gray-500">Track and manage your inventory levels with automated alerts</p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <AiOutlineArrowRight className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">Pricing Optimization</h3>
              <p className="mt-2 text-base text-gray-500">Optimize your prices with our market trend analysis and competitor pricing insights</p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <AiOutlineArrowRight className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">Real-time Analytics</h3>
              <p className="mt-2 text-base text-gray-500">Get real-time insights into your sales, profits, and customer behavior</p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <AiOutlineArrowRight className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">Product Performance Tracking</h3>
              <p className="mt-2 text-base text-gray-500">Track the performance of your products and make data-driven decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
            How It Works
          </h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-4">
              <p className="text-base text-gray-500">
                Connect your e-commerce store to our platform and start tracking your sales data
              </p>
            </li>
            <li className="mb-4">
              <p className="text-base text-gray-500">
                Our machine learning-based engine analyzes your historical sales data and predicts your future profits
              </p>
            </li>
            <li className="mb-4">
              <p className="text-base text-gray-500">
                Use our pricing optimization tool to set competitive prices for your products
              </p>
            </li>
            <li className="mb-4">
              <p className="text-base text-gray-500">
                Track your inventory levels and receive automated alerts for low-stock items
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF BAR */}
      <section className="bg-indigo-100 py-12">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <div className="flex flex-col justify-center items-center mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl mb-2">
              Trusted by Over 10,000+ Users
            </h2>
            <p className="text-base text-gray-500">
              99.9% Uptime | 4.5/5 Stars on Trustpilot
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
            Pricing
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mt-4">Free</h3>
              <p className="mt-2 text-base text-gray-500">
                Perfect for small businesses and solo entrepreneurs
              </p>
              <ul className="list-disc list-inside mt-4">
                <li className="mb-2">
                  <p className="text-base text-gray-500">Up to 100 products</p>
                </li>
                <li className="mb-2">
                  <p className="text-base text-gray-500">Basic analytics</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mt-4">Pro ($49/mo)</h3>
              <p className="mt-2 text-base text-gray-500">
                Ideal for growing businesses and teams
              </p>
              <ul className="list-disc list-inside mt-4">
                <li className="mb-2">
                  <p className="text-base text-gray-500">Up to 1,000 products</p>
                </li>
                <li className="mb-2">
                  <p className="text-base text-gray-500">Advanced analytics</p>
                </li>
                <li className="mb-2">
                  <p className="text-base text-gray-500">Priority support</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mt-4">Enterprise (Custom)</h3>
              <p className="mt-2 text-base text-gray-500">
                Designed for large enterprises and organizations
              </p>
              <ul className="list-disc list-inside mt-4">
                <li className="mb-2">
                  <p className="text-base text-gray-500">Unlimited products</p>
                </li>
                <li className="mb-2">
                  <p className="text-base text-gray-500">Advanced analytics</p>
                </li>
                <li className="mb-2">
                  <p className="text-base text-gray-500">Dedicated support</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/dashboard"
              className={twMerge(
                'inline-flex items-center px-6 py-3 border border-transparent',
                'text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700',
                'md:py-4 md:text-lg md:px-10'
              )}
            >
              Start Free
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 bg-indigo-100">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl mb-2">
            Unlock Your E-commerce Profit Potential
          </h2>
          <p className="text-base text-gray-500">
            Get started today and start optimizing your e-commerce profits
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="/dashboard"
              className={twMerge(
                'inline-flex items-center px-6 py-3 border border-transparent',
                'text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700',
                'md:py-4 md:text-lg md:px-10'
              )}
            >
              Launch Your Dashboard →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-indigo-100 py-12">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <div className="flex flex-col justify-center items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900 leading-tight mb-2">
              Ecomerce Profit Prophet
            </h2>
            <p className="text-base text-gray-500">
              Built with NEXUS OS
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <a
              href="#"
              className={twMerge(
                'text-base font-medium text-gray-500 hover:text-indigo-600',
                'md:text-lg'
              )}
            >
              Features
            </a>
            <a
              href="#"
              className={twMerge(
                'text-base font-medium text-gray-500 hover:text-indigo-600 ml-6',
                'md:text-lg'
              )}
            >
              Pricing
            </a>
            <a
              href="#"
              className={twMerge(
                'text-base font-medium text-gray-500 hover:text-indigo-600 ml-6',
                'md:text-lg'
              )}
            >
              Dashboard
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

export const metadata = {
  title: 'Ecomerce Profit Prophet | Unlock Your E-commerce Profit Potential',
  description:
    'Predict and optimize your e-commerce profits with our innovative platform. Get started today and unlock your e-commerce profit potential.',
};