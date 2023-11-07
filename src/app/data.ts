import type { Product, Testimonial } from '@/interfaces';

export const specialProducts: Product[] = [
  {
    img_url: '/special/special-1.png',
    name: 'Sandwich',
    price: 12,
    rating: 4.8,
    description: 'bread with meat and vegetables',
  },
  {
    img_url: '/special/special-2.png',
    name: 'Hot Milk',
    price: 12,
    rating: 4.8,
    description: 'Hot Milk with less sugar',
  },
  {
    img_url: '/special/special-3.png',
    name: 'Coffee Ice Cream',
    price: 12,
    rating: 4.8,
    description: 'Coffe with Ice cream vanilla',
  },
  {
    img_url: '/special/special-4.png',
    name: 'Cappucino',
    price: 12,
    rating: 4.8,
    description: 'Hot Cappucino',
  },
  {
    img_url: '/special/special-5.png',
    name: 'Moccacinno',
    price: 12,
    rating: 4.8,
    description: 'Hot Moccacino',
  },
  {
    img_url: '/special/special-6.png',
    name: 'Waffe Ice Crem',
    price: 12,
    rating: 4.8,
    description: 'Wafle with Ice cream',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Naura',
    image: '/testimonials/testimonial-1.png',
    comment: 'I really love the cappucino, the coffee was very smooth',
  },
  {
    id: 2,
    name: 'Jane Doe',
    image: '/testimonials/testimonial-2.png',
    comment: 'this coffee shop is very convenient',
  },
  {
    id: 3,
    name: 'Azura',
    image: '/testimonials/testimonial-3.png',
    comment: 'the coffee menu here is very much',
  },
];
