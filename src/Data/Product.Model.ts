export interface Product {
  id: number,
  name: string,
  price: number,
  image: string[],
  description: string;
  dimensions: string;
  available: number;
  category: string;
}