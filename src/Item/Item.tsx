import './Item.css'
import { Link, useParams } from "react-router-dom";
import { getProduct } from '../Data/Data.Service';

export default function Item() {
  document.title = 'Produkt - KeramiKarlsson';
  const { id } = useParams() as any;
  const product = getProduct(id);

  if (!product) {
    return (
      <div className="product-page">
        <p>Produkten kunde inte hittas. Den kan vara borttagen eller flyttad.</p>
        Gå tillbaka till: <Link to="/shop">Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-left-box">
          <div className='product-image-wrapper'>
            {product.image.map(img => <div>
              <img src={img} className="product-image"></img>
            </div>)}
          </div>
        </div>
        <div className="product-right-box">
          <div>
            <h1 className='product-name'>{product.name}</h1>
            <h2>
              {product.price} kr
            </h2>
            <p>
              {product.description}
            </p>
            <p>
              {product.available > 0 ? `Finns ${product.available} st i lager` : "Slutsåld"}
            </p>
            <p className='product-dimensions'>
              {`Mått: ${product.dimensions}`}
            </p>
            <div>
              <h2>Intresserad av att köpa?</h2>
              <p>Kontakta mig på mail elin@kodochkonst.se eller via sms till telefon 0703294590 om du är intresserad av att köpa. Betalning sker via Swish och produkten skickas på posten inom 2 dagar efter betalning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}