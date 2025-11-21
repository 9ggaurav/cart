import { useLoaderData, useOutletContext } from "react-router-dom";
import { type RootContext, type Product } from "../types";
import Products from "./products";

export default function Home() {
  const { wishList, addToWishlist } = useOutletContext<RootContext>();
  const products = useLoaderData() as Product[];

  return (
    <main className="flex flex-col items-center justify-center">
      {products && (
        <ul className="mx-0 grid grid-cols-4 gap-3">
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              addToWishlist={addToWishlist}
              isWishListed={wishList.some((p) => p.id === product.id)}
            />
          ))}
        </ul>
      )}
      *
    </main>
  );
}
