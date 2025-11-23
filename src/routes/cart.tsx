import { NavLink, useOutletContext } from "react-router-dom";
import { type RootContext } from "../types";
import EmptyCart from "../components/emptyCart";

export default function Cart() {
  const { cart, handleCart } = useOutletContext<RootContext>();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  console.log(cart);
  return (
    <div className="flex flex-col md:grid md:grid-cols-9 md:gap-3 md:px-[3vw]">
      <div className="bg-amber-200 md:col-span-6 p-4 w-full">
        <div className="flex flex-col mb-2">
          <h2 className="text-[1.3rem]">Shopping cart</h2>
          <p>You have {cart.length} item in your cart</p>
        </div>
        <hr />
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <div className="w-full bg-white p-1 flex justify-between">
                <div className="w-30 h-30 flex items-center justify-center bg-red-300">
                  <img
                    className="max-w-full max-h-full object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="max-w-[20%]">
                  <h3 className="text-[1.2rem] font-semibold line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-[0.8rem]">{item.category}</p>
                </div>

                <div className="flex max-w-[12vw] justify-around">
                  <button className="w-12 h-12 bg-green-300 flex justify-center ">
                    -
                  </button>
                  <input className="w-14 h-14" value={item.quantity} />
                  <button className="w-12 h-12 bg-green-300 flex justify-center ">
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#565ABB] md:col-span-3 p-4 w-full"></div>
    </div>
  );
}
