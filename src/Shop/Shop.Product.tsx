import { Product } from '../Data/Product.Model';
import Thumbnail from '../Thumbnail/Thumbnail';

export default function ShopProduct({ product: { id, image, name, price } }: ShopProductProps) {
  const url = "/item/" + id;
  const imageUrl = "../src/assets/" + image[0];

  return (<Thumbnail imageUrl={imageUrl} name={name} price={price} url={url} />);
};

interface ShopProductProps {
  product: Product
}