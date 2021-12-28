import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories, getProducts, getProductsByCategory } from '../Data/Data.Service';
import './Shop.css'
import ShopProduct from './Shop.Product';

export default function Shop() {
  const { category } = useParams() as any;
  const categories = getCategories();
  const initialValue = categories.find(x => x.toLowerCase() == category?.toLowerCase()) ?? "";
  const [selectedValue, setSelectedCategory] = useState(initialValue ? [initialValue] : categories);
  const [products, setProducts] = useState(getProductsByCategory(initialValue ? [initialValue] : categories));

  return (
    <div className="shop-container">
      <div className="toolbar">
        {categories.map(item =>
          <button key={item} value={item} className={selectedValue.includes(item) ? 'btn btn-active' : 'btn'} onClick={e => {
            setSelectedCategory(selectedValue.includes(e.currentTarget.value) ? selectedValue.filter(x => x != e.currentTarget.value) : selectedValue.concat([e.currentTarget.value]));
            setProducts(getProductsByCategory(selectedValue.includes(e.currentTarget.value) ? selectedValue.filter(x => x != e.currentTarget.value) : selectedValue.concat([e.currentTarget.value])));
          }}>{item}</button>)}
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
