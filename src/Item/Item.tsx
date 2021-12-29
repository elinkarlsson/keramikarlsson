import './Item.css'
import { useParams } from "react-router-dom";
import { getProduct } from '../Data/Data.Service';

export default function Item() {
  const { id } = useParams() as any;
  const product = getProduct(id);

  if (!product) {
    return (
      <div>Produkten kunde inte hittas.</div>
    );
  }

  const imgPath1 = product.image[0];
  const imgPath2 = (product.image.length > 1 ? product.image[1] : product.image[0]);
  const imgPath3 = (product.image.length > 2 ? product.image[2] : product.image[0]);
  const imgPath4 = (product.image.length > 3 ? product.image[3] : product.image[0]);
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-left-box">
          <div>
            <div className="product-image-list">
              <div className="product-image-wrapper">
                <img src={imgPath1} className="product-image"></img>
              </div>
              <div className="product-image-wrapper">
                <img src={imgPath2} className="product-image"></img>
              </div>
            </div>
            <div className="product-image-list">
              <div className="product-image-wrapper">
                <img src={imgPath3} className="product-image"></img>
              </div>
              <div className="product-image-wrapper">
                <img src={imgPath4} className="product-image"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product-right-box">
          <div>
            <h1>{product.name}</h1>
            <h2>
              {product.price} kr
            </h2>
            <div>
              {product.available ? "Finns i lager" : "Slutsåld"}
            </div>
            <div>
              {product.description}
            </div>
            <div>
              <h2>Intresserad av att köpa?</h2>
              <p>Kontakta mig på mail elin.karlsson.92@hotmail.com eller via sms till telefon 0703294590 om du är intresserad av att köpa. Betalning sker via Swish och produkten skickas på posten inom 2 dagar efter betalning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}