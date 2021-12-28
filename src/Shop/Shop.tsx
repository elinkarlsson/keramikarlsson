import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories, getProducts, getProductsByCategory } from '../Data/Data.Service';
import './Shop.css'
import ShopProduct from './Shop.Product';

export default function Shop() {
  const { category } = useParams() as any;
  const categories = getCategories();
  const initialValue = categories.find(x => x.toLowerCase() == category?.toLowerCase()) ?? "";
  const [selectedValue, setSelectedCategory] = useState(initialValue);
  const [products, setProducts] = useState(getProductsByCategory(initialValue));

  return (
    <div className="shop-container">
      <div className="toolbar">
        <form>
          <label htmlFor="categories">Kategorier</label>
          <select id="categories" 
            onChange={e => { 
              setSelectedCategory(e.currentTarget.value); 
              setProducts(getProductsByCategory(e.currentTarget.value)); 
            }} 
            value={selectedValue}>
            <option value="">Visa alla</option>
            {categories.map(item =>
              <option key={item} value={item}>{item}</option>)}
          </select>
        </form>
      </div>
        {products.map(product =>
        <div key={product.id} className="responsive">
          <div className="gallery">
          <ShopProduct product={product} />
          </div>
          </div>
        )}
        <div className="clearfix"></div>
    </div>);
}
