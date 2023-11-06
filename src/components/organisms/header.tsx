import React from 'react';
import logo from '@/assets/logo.svg';
import Icon from '@/components/atoms/icon';

export default function Header() {
  return (
    <header className="fixed z-50 top-0 w-full py-9">
      <div className="container flex justify-between items-center">
        <img src={logo.src} alt="" />
        <nav className="hidden md:flex gap-8 ">
          <a href="#" className="active">
            About us
          </a>
          <a href="#">Our Product</a>
          <a href="#">Delivery</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Cappuccino"
              className="bg-white pl-12 pr-2 py-3 text-sm rounded-full outline-none shadow-lg"
            />
            <div className="absolute left-3">
              <Icon icon="search" />
            </div>
          </div>
          <button>
            <Icon icon="shopping-cart" />
          </button>
        </div>
      </div>
    </header>
  );
}
