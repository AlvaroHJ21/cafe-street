import {
  AboutUsSection,
  DeliverySection,
  Hero,
  NewsLetterSection,
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
      <NewsLetterSection />
    </>
  );
}
