import { useOutletContext } from "react-router-dom";
import { type RootContext } from "../types";
// import Products from "./products";
import WishListCard from "./wishListCard";

export default function Wishlist() {
  const { wishList, removeFromWishlist } = useOutletContext<RootContext>();
  console.log(typeof wishList);
  return (
    <div className="flex flex-col items-center justify-center">
      {wishList.length === 0 ? (
        <h1>Empty rn :(</h1>
      ) : (
        <ul className="mx-0 grid grid-cols-4 gap-3">
          {wishList.map((product) => {
            return (
              <WishListCard
                key={product.id}
                product={product}
                removeFromWishlist={removeFromWishlist}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
