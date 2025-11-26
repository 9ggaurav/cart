import { useState, useEffect } from "react";
import { type cartItem, type Product } from "../types";
import useWishlist from "./wishlistHook";

export default function useCart() {
  const { wishList, removeFromWishlist } = useWishlist();

  const [cart, setCart] = useState<cartItem[]>(() => {
    const saved = localStorage.getItem("inCartList");
    return saved ? JSON.parse(saved) : [];
  });

  function handleCart(cartItem: cartItem): void {
    const exists = cart.some((p) => p.id === cartItem.id);
    if (exists) {
      const list = cart.filter((p) => p.id !== cartItem.id);
      setCart(list);
    } else {
      setCart((prev) => [...prev, { ...cartItem, quantity: 1 }]);
    }
  }

  function handleCartFromWishlist(product: cartItem): void {
    const exists = cart.some((p) => p.id === product.id);
    if (exists) {
      setCart(cart);
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(cartItem: cartItem): void {
    const list = cart.filter((p) => p.id !== cartItem.id);
    setCart(list);
  }

  function incrementQuantity(cartItem: cartItem): void {
    const newList = cart.map((item) => {
      if (item.id == cartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newList);
  }

  function decrementQuantity(cartItem: cartItem): void {
    const newList = cart.map((item) => {
      if (item.id == cartItem.id) {
        if (item.quantity === 1) return item;
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newList);
  }

  function wishlistToCart(product: Product): void {
    const item = wishList.find((i) => i.id === product.id);
    if (!item) return;
    removeFromWishlist(item);
    handleCartFromWishlist({ ...item, quantity: 1 });
  }

  useEffect(() => {
    localStorage.setItem("inCartList", JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    handleCart,
    removeFromCart,
    handleCartFromWishlist,
    incrementQuantity,
    decrementQuantity,
    wishlistToCart,
  };
}
