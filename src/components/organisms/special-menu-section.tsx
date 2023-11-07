import { ProductCard } from '../molecules';
import type { Product } from '@/interfaces';

interface Props {
  products: Product[];
}

export default function SpecialMenuSection(props: Props) {
  const { products } = props;

  return (
    <section>
      <div className="container py-32">
        <h2 className="mb-8">
          Special menu <span className="text-underline">for you</span>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} showDescription/>
          ))}
        </div>
      </div>
    </section>
  );
}
