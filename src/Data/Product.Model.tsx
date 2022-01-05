export interface Product {
  id: number,
  name: string,
  price: number,
  image: string[],
  imageAlt: string,
  description: string;
  available: boolean;
  category: string;
}