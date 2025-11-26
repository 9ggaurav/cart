import { useState, useEffect, useCallback } from "react";
import { type Product } from "../types";

export default function useWishlist() {
  const [wishList, setWishList] = useState<Product[]>(() => {
    const saved = localStorage.getItem("wishList");
    return saved ? JSON.parse(saved) : [];
  });

  const addToWishlist = useCallback(
    (product: Product): void => {
      const exists = wishList.some((p) => p.id === product.id);
      if (exists) {
        const list = wishList.filter((e) => e.id !== product.id);
        setWishList(list);
      } else {
        setWishList((prev) => [...prev, product]);
      }
    },
    [wishList],
  );

  function removeFromWishlist(product: Product): void {
    const list = wishList.filter((p) => p.id != product.id);
    setWishList(list);
  }

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return { wishList, addToWishlist, removeFromWishlist };
}
