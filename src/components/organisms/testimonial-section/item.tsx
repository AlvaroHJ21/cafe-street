import type { Testimonial } from '@/interfaces';

interface Props {
  testimonial: Testimonial;
}

export const TestimonialItem = (props: Props) => {
  const { testimonial } = props;
  return (
    <div className="relative h-fit">
      <div className="border">
        <img src={testimonial.image} alt="" />
      </div>
      <div className="absolute bottom-4 w-full left-8 p-1 bg-[#FFD390] bg-opacity-40 backdrop-blur-sm rounded-md">
        <div className="p-3 bg-[#FFCB7C] rounded-md">
          <h3 className='font-semibold'>{testimonial.name}</h3>
          <p className='text-xs'>{testimonial.comment}</p>
        </div>
      </div>
    </div>
  );
};
