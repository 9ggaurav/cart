import { useOutletContext } from "react-router-dom";
import { type RootContext } from "../types";
import EmptyCart from "../components/emptyCart";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useOutletContext<RootContext>();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  // console.log(cart);
  return (
    <div className="flex flex-col md:grid md:grid-cols-9 md:gap-4 md:px-[3vw] bg-white">
      <div className="md:col-span-6 p-6 w-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Shopping Cart
          </h2>
          <p className="text-sm text-gray-600">
            You have {cart.length} item in your cart
          </p>
        </div>
        <div className="border-b border-gray-200 mb-4"></div>

        <div className="space-y-4">
          {cart.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded p-4 h-40"
              >
                <div className="flex gap-4 items-center h-full">
                  <div className="w-32 h-32 shrink-0 bg-gray-50 flex items-center justify-center rounded">
                    <img
                      className="max-w-full max-h-full object-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        decrementQuantity(item);
                      }}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      className="w-10 h-8 text-center border border-gray-300 rounded text-sm"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      onClick={() => {
                        incrementQuantity(item);
                      }}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="w-16 h-full flex flex-col justify-around text-right shrink-0">
                    <p className="text-base font-light text-gray-700 text-[0.8rem] underline">
                      ${Number(item.price)}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      ${Number(item.price) * Number(item.quantity)}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      removeFromCart(item);
                    }}
                    className="shrink-0 text-gray-400 hover:text-gray-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#565ABB] md:col-span-3 p-4 w-full"></div>
    </div>
  );
}
