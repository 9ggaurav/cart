import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center mt-10  min-h-screen bg-white gap-6">
      <ShoppingCart size={48} className="text-gray-300" />

      <h2 className="text-xl font-medium text-gray-900">Your cart is empty</h2>

      <p className="text-sm text-gray-600">
        Add items to your wishlist to save them for later
      </p>

      <Link
        to="/"
        className="border border-gray-900 text-gray-900 hover:bg-gray-50 font-medium py-2 px-6 rounded text-sm mt-4"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
