import { Product } from "./Product.Model";
import imgHus from '../assets/hus.jpg'
import imgDoughnut from '../assets/doughnut.jpg'
import imgMiniVas1 from '../assets/mini-vas-1.jpg'
import imgTaggig from '../assets/taggig.jpg'
import imgVas1 from '../assets/vas-1.jpg'
import imgKopp1 from '../assets/kopp-1.jpg'
import imgKopp2 from '../assets/kopp-2.jpg'
import imgKopp3 from '../assets/kopp-3.jpg'
import imgKopp4 from '../assets/kopp-4.jpg'
import imgVasMedHal1 from '../assets/vas-med-hal-1.jpg'
import imgVasMedHal2 from '../assets/vas-med-hal-2.jpg'
import imgVasMedHal3 from '../assets/vas-med-hal-3.jpg'
import imgVasMedHal4 from '../assets/vas-med-hal-4.jpg'
import imgVasMedHal5 from '../assets/vas-med-hal-5.jpg'
import imgGrontFat1 from '../assets/gront-fat-1.jpg'
import imgGrontFat2 from '../assets/gront-fat-2.jpg'
import imgGrontFat3 from '../assets/gront-fat-3.jpg'
import imgGrontFat4 from '../assets/gront-fat-4.jpg'
import imgPlattFat1 from '../assets/platt-fat-1.jpg'
import imgPlattFat2 from '../assets/platt-fat-2.jpg'
import imgPlattFat3 from '../assets/platt-fat-3.jpg'
import imgPlattFat4 from '../assets/platt-fat-4.jpg'

export const products = [
  {
    id: 1,
    name: "Hus",
    price: 400,
    image: [imgHus],
    description: "Sött litet prydnadshus 10 x 12 cm. Stengodslera med lavafläckar, vit glasyr.",
    available: true,
    category: "Skulpturer",
  },
  {
    id: 2,
    name: "Stankonia",
    price: 400,
    image: [imgDoughnut],
    description: "",
    available: true,
    category: "Vaser",
  },
  {
    id: 3,
    name: "Minivas",
    price: 250,
    image: [imgMiniVas1],
    description: "",
    available: true,
    category: "Vaser",
  },
  {
    id: 4,
    name: "Taggig",
    price: 500,
    image: [imgTaggig],
    description: "",
    available: true,
    category: "Skålar",
  },
  {
    id: 5,
    name: "Vas",
    price: 200,
    image: [imgVas1],
    description: "",
    available: true,
    category: "Vaser",
  },
  {
    id: 11,
    name: "Kopp",
    price: 200,
    image: [imgKopp1, imgKopp2, imgKopp3, imgKopp4],
    description: "Mindre kopp.",
    available: true,
    category: "Koppar",
  },
  {
    id: 7,
    name: "Vas",
    price: 450,
    image: [imgVasMedHal5, imgVasMedHal1, imgVasMedHal2, imgVasMedHal3],
    description: "Vas med hål i mitten, gjord i stengodlera med lavafläckar och vit glansig glasyrl.",
    available: true,
    category: "Vaser",
  },
  {
    id: 8,
    name: "Grönt fat",
    price: 250,
    image: [imgGrontFat1, imgGrontFat2, imgGrontFat3, imgGrontFat4],
    description: "Litet avlångt fat i vit stengodslera med lavafläckar. Vit och grön glasyr.",
    available: true,
    category: "Fat",
  },
  {
    id: 9,
    name: "Platt fal",
    price: 300,
    image: [imgPlattFat1, imgPlattFat2, imgPlattFat3, imgPlattFat4],
    description: "Platt avlångt fat i vit stengodslera med lavafläckar. Vit glasyr med svarta/blå fläckar.",
    available: true,
    category: "Fat",
  }
] as Product[];