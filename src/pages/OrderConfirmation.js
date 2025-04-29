import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <section className="container mx-auto py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Thank You for Your Order!</h2>
        <p className="mb-4">Your order has been successfully placed.</p>
        <p className="mb-6">We will send you a confirmation email with the details of your order.</p>
        <Link 
          to="/" 
          className="bg-primary text-white p-4 font-medium rounded mt-4 inline-block w-full sm:w-auto"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmation;
