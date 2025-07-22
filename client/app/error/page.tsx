// components/ErrorMessage.tsx
import { FaExclamationTriangle } from 'react-icons/fa';

interface ErrorMessageProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function ErrorMessage({
  title = 'Oops! Something went wrong.',
  message = 'An unexpected error occurred. Please try again later.',
  actionLabel = 'Go Home',
  actionHref = '/',
}: ErrorMessageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-red-50">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-3xl font-semibold text-red-700 mb-2">{title}</h1>
      <p className="text-gray-700 text-lg mb-6">{message}</p>
      <a
        href={actionHref}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        {actionLabel}
      </a>
    </div>
  );
}
