import { Product } from '../Data/Product.Model';
import Thumbnail from '../Thumbnail/Thumbnail';

export default function ShopProduct({ product: { id, image, name, price, imageAlt } }: ShopProductProps) {
  const url = "/item/" + id;
  const imageUrl = image[0];

  return (<Thumbnail imageUrl={imageUrl} name={name} price={price} url={url} imageAlt={imageAlt} />);
};

interface ShopProductProps {
  product: Product
}