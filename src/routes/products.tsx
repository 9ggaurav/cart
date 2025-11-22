import { Heart, BadgeX } from "lucide-react";
import { type ProductCardProps } from "../types";
// import { useOutletContext } from "react-router-dom";

export default function ProductCard({
  product,
  addToWishlist,
  isWishListed,
  handleCart,
  isInCart,
}: ProductCardProps) {
  const { id, image, title, price, rating, category } = product;
  // const { handleCart } = useOutletContext<RootContext>();
  return (
    <div
      id={`${id}`}
      className="product-card w-80 border border-gray-200 flex flex-col p-5 gap-4 bg-white"
    >
      <button onClick={() => addToWishlist(product)} className="">
        {isWishListed ? (
          <div className="flex justify-start items-center gap-3 text-[0.8rem] text-gray-500">
            <BadgeX />
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

      <div>
        <h3 className="text-base font-medium text-gray-900 line-clamp-3">
          {title}
        </h3>
        <p className="text-gray-700 font-light text-[0.8rem]">{category}</p>
      </div>

      <div className="space-y-2">
        <p className="text-xl font-semibold text-gray-900">${price}</p>
        <p className="text-xs text-gray-500">
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        {/*<Quantity />*/}
        {isInCart ? (
          <button
            onClick={() => {
              handleCart({ ...product, quantity: 1 });
            }}
            className="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 rounded text-sm"
          >
            Added to Cart
          </button>
        ) : (
          <button
            onClick={() => {
              handleCart({ ...product, quantity: 1 });
            }}
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded text-sm"
          >
            Add to Cart
          </button>
        )}
        {/*<button
          onClick={() => {
            handleCart({ ...product, quantity: 1 });
          }}
          className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded text-sm"
        >
          Add to Cart
        </button>*/}
      </div>
    </div>
  );
}
