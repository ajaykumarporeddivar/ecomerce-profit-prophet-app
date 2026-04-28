'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ArrowRight } from 'lucide-react';

interface AppHeaderProps {
  logo: string;
  navLinks: { href: string; label: string }[];
  demoBadge: string;
  mobileHamburger: boolean;
}

const AppHeader = ({ logo, navLinks, demoBadge, mobileHamburger }: AppHeaderProps) => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-lg font-bold">{logo}</h1>
        </div>
        <nav>
          <ul className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={clsx(
              'md:hidden',
              'flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg'
            )}
          >
            <ArrowRight className="text-gray-500" />
          </button>
        </nav>
        {demoBadge && <span className="text-xs text-gray-500">{demoBadge}</span>}
      </div>
    </header>
  );
};

interface AppSidebarProps {
  items: { icon: React.ReactNode; label: string; href: string; active: boolean }[];
}

const AppSidebar = ({ items }: AppSidebarProps) => {
  return (
    <aside className="bg-white shadow-md fixed top-0 left-0 bottom-0 w-64 z-10">
      <div className="py-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={clsx(
              'block py-2 px-4 text-sm',
              item.active ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'
            )}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

interface DemoBannerProps {
  message: string;
}

const DemoBanner = ({ message }: DemoBannerProps) => {
  const [dismissed, setDismissed] = React.useState(() => {
    const dismissed = localStorage.getItem('demo-banner-dismissed');
    return dismissed === 'true';
  });

  if (dismissed) return null;

  return (
    <div className="bg-orange-100 text-orange-500 py-2 text-center">
      <button
        className="text-xs text-orange-500 hover:text-orange-700"
        onClick={() => {
          localStorage.setItem('demo-banner-dismissed', 'true');
          setDismissed(true);
        }}
      >
        Dismiss
      </button>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export { AppHeader, AppSidebar, DemoBanner };