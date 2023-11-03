import { Button } from '@/components/atoms';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-background relative">
      <div className="container flex items-center h-screen lg:h-[80vh] relative z-10">
        <div className="flex-1">
          <div className="flex flex-col gap-6 items-start">
            <h1 className="text-5xl font-semibold">
              Enjoy yout <span className="text-primary">coffee</span> before your activity
            </h1>
            <p>
              Boost your productivity and build your mood with a glass of coffee in the morning{' '}
            </p>
            <div className="flex gap-4">
              <Button>
                Order now
                <div className="w-6 h-6 rounded-full bg-primary"></div>
              </Button>
              <Button variant="text">More menu</Button>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <Image src="/hero.png" width={500} height={500} alt="Hero image" />
        </div>
      </div>
      <Image
        src="/bg_img_hero.png"
        alt="caffes"
        width={600}
        height={400}
        className="absolute top-0 right-0 w-1/2 md:w-1/3 lg:w-1/4"
      />
      <Image
        src="/bg_img_hero.png"
        alt="caffes"
        width={600}
        height={400}
        className="absolute -bottom-20 left-0 w-1/2 md:w-1/3 lg:w-1/4 rotate-180"
      />
    </section>
  );
}