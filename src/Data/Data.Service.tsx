import { categories } from "./Data.Categories";
import { products } from "./Data.Products";
import { Product } from "./Product.Model";

export const getProducts = () => products;

export const getProduct = (id: number) => products.find(x => x.id == id);

export const getProductsByCategory = (category: string) => (category == 'Visa alla') ? products : products.filter(x => x.category == category);

export const getCategories = () => categories;