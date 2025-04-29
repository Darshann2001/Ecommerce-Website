import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Order placed with details:', userDetails);

    setOrderPlaced(true);

    clearCart();

    setTimeout(() => {
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <section className="container mx-auto py-12">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Review your Order</h2>
        <div className="border-b mb-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <div>
                {item.title} <span className="text-sm text-gray-500">x {item.amount}</span>
              </div>
              <div>Rs. {(item.price * item.amount).toFixed(2)}</div>
            </div>
          ))}

          <div className="flex justify-between py-2 font-semibold">
            <div>Total</div>
            <div>Rs. {parseFloat(total).toFixed(2)}</div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded"
              pattern="[0-9]*"
              inputMode="numeric"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-primary text-white p-4 w-full font-medium rounded"
            >
              {orderPlaced ? 'Order Placed' : 'Place Order'}
            </button>
          </div>
        </form>

        {orderPlaced && (
          <div className="mt-4 text-center text-green-500">
            <p>Your order has been placed successfully!</p>
            <p>Redirecting to confirmation page...</p>
          </div>
        )}

        <div className="mt-4 text-center">
          <Link to="/" className="text-primary">Cancel and go back to shopping</Link>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
