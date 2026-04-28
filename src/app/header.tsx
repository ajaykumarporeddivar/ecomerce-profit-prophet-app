import Link from 'next/link';
import { AiOutlineMenu } from 'lucide-react';
import { clsx } from 'clsx';

export default function Header() {
  return (
    <header className="bg-white py-4">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={clsx(
            'text-lg font-bold text-gray-900 hover:text-gray-700'
          )}
        >
          Ecomerce Profit Prophet
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/dashboard"
              className={clsx(
                'text-sm text-gray-600 hover:text-gray-900'
              )}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className={clsx(
                'text-sm text-gray-600 hover:text-gray-900'
              )}
            >
              Pricing
            </Link>
          </li>
        </ul>
        <button className={clsx('bg-gray-100 py-2 px-4 rounded-lg text-sm')}>
          <AiOutlineMenu size={16} className="mr-1" />
          Menu
        </button>
      </nav>
    </header>
  );
}