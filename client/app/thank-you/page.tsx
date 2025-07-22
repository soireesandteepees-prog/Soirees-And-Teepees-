// components/ThankYou.tsx
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-50">
      <FaCheckCircle className="text-green-500 text-6xl mb-4" />
      <h1 className="text-3xl font-semibold mb-2">Thank You!</h1>
      <p className="text-gray-700 text-lg mb-6">
        Your Booking has been received successfully.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-primary_button text-white rounded hover:secondary_button transition"
      >
        Go Home
      </a>
    </div>
  );
}
