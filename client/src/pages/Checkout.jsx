import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm'; // Adjust the path accordingly
import PaymentModal from '../components/PaymentModal'; // Adjust the path accordingly

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1.', quantity: 1 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2.', quantity: 1 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3.', quantity: 1 },
    // Add more products as needed
  ]);

  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleModalCheckout = () => {
    setShowModal(true);
  };

  const handleCheckout = () => {
    // You can add any logic you need before showing the PaymentForm
    setShowPaymentForm(true);
    setShowModal(false); // Close the modal after the user clicks "Checkout" within the modal
  };

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((product) => (
            <div key={product.id} className="bg-gray-100 border-[#ecd398] border-4 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
              <p className="text-black">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                    disabled={product.quantity === 1}
                    className="bg-indigo-600 text-white py-1 px-2 rounded-md mr-2"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                    className="bg-indigo-600 text-white py-1 px-2 rounded-md ml-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {cartItems.length === 0 && (
            <p className="text-xl text-gray-600">Your Shopping Cart is Empty</p>
          )}
        </div>
        {/* Add a "Pay Now" button that opens the modal */}
        <div className="mt-8">
          {!showPaymentForm && (
            <button
              onClick={handleModalCheckout}
              className="bg-indigo-600 text-white py-2 px-4 rounded-md"
            >
              Checkout!
            </button>
          )}
        </div>

        {/* Include the PaymentModal component */}
        {showModal && (
          <PaymentModal>
            <button onClick={handleCheckout} className="bg-indigo-600 text-white py-2 px-4 rounded-md">
              Checkout!
            </button>
          </PaymentModal>
        )}

        {/* Include the PaymentForm component conditionally */}
        {showPaymentForm && <PaymentForm />}
      </div>
    </div>
  );
};

export default Checkout;