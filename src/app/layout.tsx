import { useState } from 'react';
import { clsx } from 'clsx';
import { AiOutlineWarning } from 'lucide-react';

const Layout = () => {
  const [demoMode, setDemoMode] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {demoMode && (
        <div className="bg-yellow-100 py-2 text-center text-sm text-yellow-700">
          Demo Mode
        </div>
      )}
      <main className="flex-1">
        {/* Page content goes here */}
      </main>
      <footer className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        &copy; 2023 Ecomerce Profit Prophet
      </footer>
    </div>
  );
};

export default Layout;