import React from 'react';
import { Button } from '../atoms';

export default function NewsLetterSection() {
  return (
    <section className="my-20">
      <div className="container relative flex justify-center items-center">
        <img src="/newsletter.png" alt="" className="min-h-[300px] object-cover rounded-lg bg-secondary" />
        <div className="absolute text-center p-10">
          <h2 className="text-white mb-6">Subscribe to get 50% discount price</h2>
          <div className="flex items-center bg-white rounded-full p-1 pl-4 gap-2">
            <input type="text" placeholder="Email address" className="outline-none flex-1" />
            <Button className="py-2">Order now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
