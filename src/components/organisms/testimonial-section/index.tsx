import { TestimonialItem } from './item';
import type { Testimonial } from '@/interfaces';

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialSection(props: Props) {
  const { testimonials } = props;
  return (
    <section className="relative py-28">
      <div className="container flex relative z-10 items-center gap-8">
        <div className="flex-1">
          <h2 className="mb-6">What they say about us</h2>
          <p className="w-72">
            We always provide the best service and always maintain the quality of coffee
          </p>
        </div>
        <div className="flex-[2]">
          <div className="flex gap-16">
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 z-0 w-full">
        <img src="/about-us-bg.png" alt="" className="w-2/3 h-full object-cover rounded-r-3xl" />
      </div>
    </section>
  );
}
