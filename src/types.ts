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

export type ProductCardProps = {
  product: Product;
  addToWishlist: (product: Product) => void;
  isWishListed: boolean;
};

export type RootContext = {
  wishList: Product[];
  addToWishlist: (product: Product) => void;
};
