import React from 'react';
import { Button } from '../atoms';

export default function AboutUsSection() {
  return (
    <section className='relative mt-16'>
      <div className="flex container relative z-10">
        <div className="flex-1 hidden md:block">
          <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-xl p-2 shadow-lg w-fit m-auto relative -top-16">
            <img src="/about-us.png" alt="" />
          </div>
        </div>
        <div className="flex-1">
          <div className="p-20">
            <h2 className="mb-8">
              About <span className="text-underline">us</span>
            </h2>
            <p className="text-xl font-semibold mb-6">
              We provide quality coffee, and ready to deliver.
            </p>
            <p className='mb-8'>
              We are a company that makes and distributes delicious drinks. our main product is made
              with a secret recipe and available in stores worldwide.
            </p>
            <Button className='text-primary'>Get your coffee</Button>
          </div>
        </div>
      </div>
      <div className='absolute top-0 z-0 w-full h-full'>
        <img src="/about-us-bg.png" alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
