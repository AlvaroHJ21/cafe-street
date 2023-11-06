import { Product } from '@/interfaces';
import Icon from '../atoms/icon';

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  const { product } = props;
  const { img_url, name, price, rating } = product;
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
          <span className="py-1 px-3 rounded-md border-2 text-primary border-primary">Hot</span>
          <span className="py-1 px-3 rounded-md border-2 text-primary border-primary">Cold</span>
          <div className="flex-1"></div>
          <button className="bg-primary w-8 h-8 rounded-full text-white grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
