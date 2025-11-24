import { useOutletContext } from "react-router-dom";
import { type RootContext } from "../types";
import EmptyCart from "../components/emptyCart";
import { Plus, Minus, Trash2, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useOutletContext<RootContext>();

  const [cardType, setCardType] = useState("mastercard");
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += Number(cart[i].quantity) * Number(cart[i].price);
  }

  const shipping = 4;
  const total = Number(subtotal) + shipping;

  const logos = ["/masterCard.png", "/rupay.png", "/visa.png", "/seeall.png"];

  // console.log(cart);
  return (
    <div className=" md:grid md:grid-cols-9 md:gap-4 md:px-[3vw] bg-white">
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

      <div className="bg-gradient-to-br from-[#5B63B8] to-[#4A51A0] min-h-screen md:col-span-3 p-6 w-full flex flex-col justify-center items-center rounded-3xl">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-4xl text-white font-semibold">Card Details</h1>
            <div className="h-24 w-24 bg-gray-300 rounded-2xl flex-shrink-0"></div>
          </div>

          {/* Card Type */}
          <div className="mb-8">
            <h3 className="text-white text-sm font-medium mb-3">Card type</h3>
            <div className="flex gap-3 justify-start">
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  onClick={() => setCardType(String(idx))}
                  className={`h-16 w-20 rounded-lg flex items-center justify-center cursor-pointer transition ${
                    cardType === String(idx)
                      ? "bg-white"
                      : "bg-blue-400 bg-opacity-30"
                  }`}
                >
                  <img
                    className="h-10 w-14 object-contain"
                    src={logo}
                    alt="card logo"
                  />
                </div>
              ))}
              <div className="h-16 w-20 bg-blue-400 bg-opacity-30 rounded-lg flex items-center justify-center text-white text-xs font-medium cursor-pointer">
                See all
              </div>
            </div>
          </div>

          {/* Name on Card */}
          <div className="mb-6">
            <label className="text-white text-sm font-medium mb-2 block">
              Name on card
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full bg-blue-400 bg-opacity-30 text-white placeholder-blue-200 rounded-lg px-4 py-3 outline-none focus:bg-opacity-40 transition"
            />
          </div>

          {/* Card Number */}
          <div className="mb-6">
            <label className="text-white text-sm font-medium mb-2 block">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1111 2222 3333 4444"
              className="w-full bg-blue-400 bg-opacity-30 text-white placeholder-blue-200 rounded-lg px-4 py-3 outline-none focus:bg-opacity-40 transition"
            />
          </div>

          {/* Expiry and CVV */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <label className="text-white text-sm font-medium mb-2 block">
                Expiration date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="mm/yy"
                className="w-full bg-blue-400 bg-opacity-30 text-white placeholder-blue-200 rounded-lg px-4 py-3 outline-none focus:bg-opacity-40 transition"
              />
            </div>
            <div className="flex-1">
              <label className="text-white text-sm font-medium mb-2 block">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                className="w-full bg-blue-400 bg-opacity-30 text-white placeholder-blue-200 rounded-lg px-4 py-3 outline-none focus:bg-opacity-40 transition"
              />
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-3 mb-8 text-white text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="border-t border-blue-300 pt-3 flex justify-between font-semibold">
              <span>Total (Tax incl.)</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition hover:scale-105">
            <span>${total.toLocaleString()}</span>
            <span>Checkout</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
