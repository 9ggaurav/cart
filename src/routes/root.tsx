import { NavLink, Outlet } from "react-router-dom";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import type { cartItem, Product } from "../types";

export default function Root() {
  const [wishList, setWishList] = useState<Product[]>(() => {
    const saved = localStorage.getItem("wishList");
    return saved ? JSON.parse(saved) : [];
  });

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

  // console.log(cart);

  function addToWishlist(product: Product): void {
    const exists = wishList.some((p) => p.id === product.id);
    if (exists) {
      const list = wishList.filter((e) => e.id !== product.id);
      setWishList(list);
    } else {
      setWishList((prev) => [...prev, product]);
    }
  }

  function removeFromWishlist(product: Product): void {
    const list = wishList.filter((p) => p.id != product.id);
    setWishList(list);
  }

  function removeFromCart(cartItem: cartItem): void {
    const list = cart.filter((p) => p.id !== cartItem.id);
    // console.log(cartItem);
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

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    localStorage.setItem("inCartList", JSON.stringify(cart));
  }, [cart]);

  return (
    <main className="min-h-screen flex flex-col">
      <div
        className="flex justify-between items-center mb-4 px-6 py-4 bg-white border-b border-gray-200"
        id="top-bar"
      >
        <div className="text-lg font-semibold text-gray-900">
          <NavLink to="/">Exclusive</NavLink>
        </div>

        <nav>
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <NavLink
                to="/wishlist"
                className="text-gray-700 hover:text-gray-900 flex gap-1"
              >
                <Heart size={20} />
                <h1>{wishList.length}</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="text-gray-700 hover:text-gray-900 flex gap-1"
              >
                <ShoppingCart size={20} />
                <h1>{cart.length}</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/me" className="text-gray-700 hover:text-gray-900">
                <User size={20} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <Outlet
          context={{
            wishList,
            addToWishlist,
            removeFromWishlist,
            cart,
            handleCart,
            removeFromCart,
            incrementQuantity,
            decrementQuantity,
          }}
        />
      </div>
    </main>
  );
}
