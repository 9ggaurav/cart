import { useLoaderData, useOutletContext } from "react-router-dom";
import type { Product } from "../types";
import Products from "./products";

export async function loader() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function Home() {
  const { addToWishlist } = useOutletContext();
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
            />
          ))}
        </ul>
      )}
      *
    </main>
  );
}
