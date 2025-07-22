'use client';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-red-50">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-3xl font-semibold text-red-700 mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-700 text-lg mb-6">{error.message || 'An unexpected error occurred. Please try again later.'}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}