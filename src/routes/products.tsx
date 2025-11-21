import { Heart, HeartOff } from "lucide-react";
import Quantity from "../components/quantity";
import type { ProductCardProps } from "../types";

export default function ProductCard({
  product,
  addToWishlist,
  isWishListed,
}: ProductCardProps) {
  const { id, image, title, price, rating } = product;
  return (
    <div
      id={`${id}`}
      className="product-card w-80 border border-gray-200 flex flex-col p-5 gap-4 bg-white"
    >
      <button onClick={() => addToWishlist(product)} className="">
        {isWishListed ? (
          <div className="flex justify-start items-center gap-3 text-[0.8rem] text-gray-500">
            <HeartOff />
            <p>item wishlisted</p>
          </div>
        ) : (
          <Heart />
        )}
      </button>

      <div className="w-full h-48 flex items-center justify-center bg-gray-50">
        <img
          className="max-w-full max-h-full object-contain"
          src={image}
          alt={title}
        />
      </div>

      <h3 className="text-base font-medium text-gray-900 line-clamp-3">
        {title}
      </h3>

      <div className="space-y-2">
        <p className="text-xl font-semibold text-gray-900">${price}</p>
        <p className="text-xs text-gray-500">
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        <Quantity />
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
