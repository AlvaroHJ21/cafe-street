'use client';

import { useEffect, useRef } from 'react';
import logo from '@/assets/logo.svg';
import { Icon } from '@/components/atoms';

export default function Header() {
  const prevScrollRef = useRef(0);

  useEffect(() => {
    const header = document.querySelector('header');

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollRef.current < currentScrollPos) {
        //bajando
        header?.classList.add('opacity-0');
      } else {
        //subiendo
        if (currentScrollPos > 100) {
          header?.classList.add('bg-white');
        } else {
          header?.classList.remove('bg-white');
        }
        header?.classList.remove('opacity-0');
      }
      prevScrollRef.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed z-50 top-0 w-full py-9 transition-all">
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
