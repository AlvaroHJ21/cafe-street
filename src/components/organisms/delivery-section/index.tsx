import React from 'react';
import { Item } from './item';

export default function DeliverySection() {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-8">
          How to use delivery <span className="text-underline">service</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          <Item
            image="/delivery-1.png"
            title="choose your coffee"
            description="there are 20+ coffees for you"
          />
          <Item
            image="/delivery-2.png"
            title="we delivery it to you"
            description="Choose delivery service"
          />
          <Item
            image="/delivery-3.png"
            title="Enjoy your coffee"
            description="Choose delivery service"
          />
        </div>
      </div>
    </section>
  );
}
