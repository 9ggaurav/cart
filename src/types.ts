export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type cartItem = Product & {
  quantity: number;
};

export type ProductCardProps = {
  product: Product;
  addToWishlist: (product: Product) => void;
  isInCart: boolean;
  isWishListed: boolean;
  handleCart: (item: cartItem) => void;
};

export type WishlistCardProps = {
  product: Product;
  removeFromWishlist: (product: Product) => void;
};

export type RootContext = {
  wishList: Product[];
  cart: cartItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
  handleCart: (product: cartItem) => void;
  removeFromCart: (item: cartItem) => void;
  incrementQuantity: (item: cartItem) => void;
  decrementQuantity: (item: cartItem) => void;
};

export type CartProps = {
  removeFromCart: (item: cartItem) => void;
};
