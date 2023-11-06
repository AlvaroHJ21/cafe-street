import React from 'react';
import { ProductCard } from '@/components/molecules';

export default function PopularProducts() {
  return (
    <section className='relative'>
      <div className="absolute -z-10 w-full bg-background h-72"></div>
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">
          Popular <span className="text-underline">Now</span>
        </h2>
      </div>
      <div className='relative'>
        <div className="container flex flex-col md:flex-row gap-9 relative z-10">
          <ProductCard
            product={{
              img_url: '/coffee-latte.png',
              name: 'Vanilla Latte',
              price: 21,
              rating: 4.9,
            }}
          />
          <ProductCard
            product={{
              img_url: '/coffee-espresso.png',
              name: 'Espresso',
              price: 12,
              rating: 4.8,
            }}
          />
          <ProductCard
            product={{
              img_url: '/hazelnut-latte.png',
              name: 'Vanilla Latte',
              price: 23,
              rating: 4.8,
            }}
          />
        </div>
        <div className="clip bg-accents top-24 z-0 rounded-[4rem] h-[90%] max-w-[1300px] w-[95%] left-0 right-0 m-auto absolute"></div>
      </div>
    </section>
  );
}
