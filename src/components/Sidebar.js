import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-200 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>

      <div className='flex flex-col gap-y-2 overflow-y-auto h-[calc(100%-250px)]'>
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <div className='text-center text-gray-500 mt-10'>🛒 Your cart is empty. Add something to get started!</div>
        )}
      </div>


      <div className='flex flex-col gap-y-4 py-8 mt-auto'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            Total: <span className='mr-2'>Rs. {parseFloat(total).toFixed(2)}</span>
          </div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        {total > 0 ? (
          <Link onClick={handleClose} to="/checkout" className="bg-primary flex p-3 justify-center items-center rounded text-white w-full font-medium">
            Checkout
          </Link>
        ) : (
          <button disabled className="bg-gray-400 text-white p-3 rounded cursor-not-allowed">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
