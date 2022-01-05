import { Link } from 'react-router-dom'
import './Thumbnail.css'

export default function Thumbnail({ name, url, imageUrl: image, price, imageAlt }: ThumbnailProps) {
  return (
    <Link className="thumbnail-link" to={url}>
      <img width="600" src={image} className="thumbnail-img" alt={imageAlt} />
      <div className="thumbnail-description-name">{name}</div>
      {price && <div className="thumbnail-description-price">{price} kr</div>}
    </Link>
  )
}

interface ThumbnailProps {
  name: string,
  price?: number,
  imageUrl: string,
  imageAlt: string,
  url: string;
}