import { Product } from '@/interfaces';
import Icon from '../atoms/icon';

interface Props {
  product: Product;
  showDescription?: boolean;
}

export default function ProductCard(props: Props) {
  const { product, showDescription = false } = props;
  const { img_url, name, price, rating, description } = product;
  return (
    <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-xl p-2 shadow-lg w-full">
      <div className="bg-white p-4 rounded-xl">
        <div className="relative rounded-lg overflow-hidden">
          <img src={img_url} alt={name} className="w-full" />
          <span className="absolute top-2 px-2 text-sm font-semibold left-2 flex items-center gap-1 bg-white rounded-full">
            {rating}
            <span className="text-[#FFD057]">
              <Icon icon="star" size={16} />
            </span>
          </span>
        </div>
        <div className="flex justify-between py-4 items-center">
          <h3 className="font-semibold text-2xl">{name}</h3>
          <p className="text-2xl font-bold">${price}</p>
        </div>
        <div className="flex gap-4">
          {showDescription && description ? (
            <p className='w-44'>{description}</p>
          ) : (
            <>
              <span className="py-1 px-3 rounded-md border-2 text-primary border-primary">Hot</span>
              <span className="py-1 px-3 rounded-md border-2 text-primary border-primary">
                Cold
              </span>
            </>
          )}

          <div className="flex-1"></div>
          <button className="bg-primary w-8 h-8 rounded-full text-white grid place-content-center">
            <Icon icon="shopping-cart" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
