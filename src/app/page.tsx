import {
  AboutUsSection,
  DeliverySection,
  Hero,
  PopularProducts,
  SpecialMenuSection,
  TestimonialSection,
} from '@/components/organisms';
import { specialProducts, testimonials } from './data';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularProducts />
      <DeliverySection />
      <AboutUsSection />
      <SpecialMenuSection products={specialProducts} />
      <TestimonialSection testimonials={testimonials} />
    </>
  );
}
