import { categories } from "./Data.Categories";
import { products } from "./Data.Products";
import { Product } from "./Product.Model";

export const getProducts = () => products;

export const getProduct = (id: number) => products.find(x => x.id == id);

export const getProductsByCategory = (category: string[]) => category ? products.filter(x => category.includes(x.category)) : products;

export const getCategories = () => categories;