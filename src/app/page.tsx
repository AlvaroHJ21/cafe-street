import {
  AboutUsSection,
  DeliverySection,
  Hero,
  PopularProducts,
  SpecialMenuSection,
} from '@/components/organisms';
import { Product } from '@/interfaces';

export default function Home() {
  const specialProducts: Product[] = [
    {
      img_url: '/special/special-1.png',
      name: 'Sandwich',
      price: 12,
      rating: 4.8,
      description: "bread with meat and vegetables"
    },
    {
      img_url: '/special/special-2.png',
      name: 'Hot Milk',
      price: 12,
      rating: 4.8,
      description: "Hot Milk with less sugar"
    },
    {
      img_url: '/special/special-3.png',
      name: 'Coffee Ice Cream',
      price: 12,
      rating: 4.8,
      description: "Coffe with Ice cream vanilla"
    },
    {
      img_url: '/special/special-4.png',
      name: 'Cappucino',
      price: 12,
      rating: 4.8,
      description: "Hot Cappucino"
    },
    {
      img_url: '/special/special-5.png',
      name: 'Moccacinno',
      price: 12,
      rating: 4.8,
      description: "Hot Moccacino"
    },
    {
      img_url: '/special/special-6.png',
      name: 'Waffe Ice Crem',
      price: 12,
      rating: 4.8,
      description: "Wafle with Ice cream"
    },
  ];

  return (
    <>
      <Hero />
      <PopularProducts />
      <DeliverySection />
      <AboutUsSection />
      <SpecialMenuSection products={specialProducts} />
    </>
  );
}
