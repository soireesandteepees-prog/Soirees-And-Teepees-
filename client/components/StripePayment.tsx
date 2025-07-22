
'use client';

import { useState } from 'react';
import { createCheckoutSession, redirectToCheckout } from '../lib/stripe';

interface PaymentItem {
  name: string;
  price: number;
  quantity: number;
}

interface StripePaymentProps {
  items: PaymentItem[];
  customerEmail?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function StripePayment({ items, customerEmail, onSuccess, onError }: StripePaymentProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      const session = await createCheckoutSession({
        items,
        customerEmail,
        successUrl: `${window.location.origin}/booking/success`,
        cancelUrl: `${window.location.origin}/booking/cancel`,
      });

      await redirectToCheckout(session.id);
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Payment error:', error);
      if (onError) {
        onError('Payment failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Summary</h3>
      
      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-700">
              {item.name} {item.quantity > 1 && `(x${item.quantity})`}
            </span>
            <span className="font-semibold">${item.price * item.quantity}</span>
          </div>
        ))}
        
        <div className="border-t pt-3 flex justify-between text-xl font-bold">
          <span>Total:</span>
          <span className="text-[#FFD3B8]">${totalAmount}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="w-full bg-[#FFD3B8] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#FFB88C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <i className="ri-loader-4-line animate-spin mr-2"></i>
            Processing...
          </div>
        ) : (
          <>
            <i className="ri-secure-payment-line mr-2"></i>
            Pay with Stripe
          </>
        )}
      </button>

      <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
        <i className="ri-shield-check-line mr-1"></i>
        Secure payment powered by Stripe
      </div>
    </div>
  );
}
