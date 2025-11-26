import { NavLink, Outlet } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import Footer from "../components/footer";
import useWishlist from "../hooks/wishlistHook";
import useCart from "../hooks/cartHook";
import useProfile from "../hooks/profileHook";

export default function Root() {
  const { wishList, addToWishlist, removeFromWishlist } = useWishlist();

  const {
    cart,
    handleCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    wishlistToCart,
  } = useCart();

  const { profilePic, handleUpload } = useProfile();

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
                <img
                  src={profilePic}
                  alt="me"
                  className="w-12 h-12 rounded-[50%]"
                />
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
            wishlistToCart,
            profilePic,
            handleUpload,
          }}
        />
      </div>
      <Footer />
    </main>
  );
}
