interface Product {
  name: string;
  price: number;
}

export interface ProductsState {
  products: Array<Product>;
}

export const productsState = {
  products: [],
};
