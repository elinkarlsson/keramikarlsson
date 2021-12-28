import './Thumbnail.css'

export default function Thumbnail({ name, url, imageUrl: image, price }: ThumbnailProps) {
  return (
    <a href={url} className="thumbnail-link">
      <img width="600" src={image} className="thumbnail-img" />
      <div className="thumbnail-description-name">{name}</div>
      {price && <div className="thumbnail-description-price">{price} kr</div>}
    </a>
  )
}

interface ThumbnailProps {
  name: string,
  price?: number,
  imageUrl: string
  url: string;
}