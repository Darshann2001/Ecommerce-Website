import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product'
import Hero from '../components/Hero'

const Home = () => {
  const { products } = useContext(ProductContext)
  const filteredProducts = products.filter(items => {
    return items.category === "men's clothing" || "women's clothing"
  })
  return <div>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm max-auto md:max-w-none md:mmax-0'>
          {filteredProducts.map(product => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
