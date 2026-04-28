'use client';

import { useEffect } from 'react';
import { AiOutlineWarning } from 'lucide-react';
import { clsx } from 'clsx';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8">
        <div className="text-6xl mb-4">
          <AiOutlineWarning size={60} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-500 mb-6 text-sm">{error.message || 'An unexpected error occurred'}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className={clsx(
              'bg-black py-2 px-4 text-white rounded-lg hover:bg-gray-800 text-sm font-semibold'
            )}
          >
            Try again
          </button>
          <a
            href="/"
            className={clsx(
              'bg-gray-100 py-2 px-4 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50'
            )}
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}