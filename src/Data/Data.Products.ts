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
import imgKanna1 from '../assets/kanna-gra-1.jpeg'
import imgKanna2 from '../assets/kanna-gra-2.jpeg'
import imgSkal from '../assets/skal-blabar.jpeg'
import imgSkal2 from '../assets/skal-blabar-2.jpeg'
import imgVasUfo from '../assets/vas-ufo.jpeg'
import imgVasUfo2 from '../assets/vas-ufo-2.jpeg'
import imgVasRand from '../assets/vas-rand.jpeg'
import imgVasRand2 from '../assets/vas-rand-2.jpeg'
import imgVasRund from '../assets/vas-rund.jpeg'
import imgVasRund2 from '../assets/vas-rund-2.jpeg'
import imgSkalLapp from '../assets/skal-lapp.jpeg'
import imgSkalLapp2 from '../assets/skal-lapp-2.jpeg'

export const products = [
  {
    id: 1,
    name: "Prydnadshus",
    price: 400,
    image: [imgHus],
    description: "Sött litet prydnadshus 10 x 12 cm. Stengodslera med lavafläckar, vit glasyr.",
    available: true,
    category: "Prydnader",
  },
  {
    id: 2,
    name: "Vas",
    price: 400,
    image: [imgDoughnut],
    description: "Vas i vit lera med mörk och ljus lila glasyr.",
    available: true,
    category: "Vaser",
  },
  {
    id: 5,
    name: "Vas",
    price: 400,
    image: [imgVas1],
    description: "Vas i vit lera med mörk och ljus lila glasyr.",
    available: true,
    category: "Vaser",
  },
  {
    id: 3,
    name: "Liten vas",
    price: 100,
    image: [imgMiniVas1],
    description: "Mini vas i vit lera och vit glasyr.",
    available: true,
    category: "Vaser",
  },
  {
    id: 4,
    name: "Taggig skål",
    price: 400,
    image: [imgTaggig],
    description: "Skål i vit lera och vit glasyr",
    available: true,
    category: "Skålar",
  },
  {
    id: 11,
    name: "Kopp",
    price: 200,
    image: [imgKopp1, imgKopp2, imgKopp3, imgKopp4],
    description: "Mindre kopp i vit lera med levafläckar, glaserad i vit glasyr och blå rinnande glasyr längst upp.",
    available: true,
    category: "Koppar",
  },
  {
    id: 12,
    name: "Tekanna",
    price: 400,
    image: [imgKanna2, imgKanna1],
    description: "Kanna i svart lera och grön/grå melerad glasyr.",
    available: true,
    category: "Tekannor",
  },
  {
    id: 13,
    name: "Skål",
    price: 300,
    image: [imgSkal, imgSkal2],
    description: "Skål i svart lera med bollar på kanten, glaserad i mörk klarblå glasyr.",
    available: true,
    category: "Skålar",
  },
  {
    id: 14,
    name: "Vas",
    price: 400,
    image: [imgVasUfo, imgVasUfo2],
    description: "Vas i svart lera med grön/grå melerad glasyr.",
    available: true,
    category: "Vaser",
  },
  {
    id: 15,
    name: "Vas",
    price: 300,
    image: [imgVasRand, imgVasRand2],
    description: "Vas i svart lera med grön/grå melerad glasyr.",
    available: true,
    category: "Vaser",
  },
  {
    id: 16,
    name: "Vas",
    price: 300,
    image: [imgVasRund, imgVasRund2],
    description: "Mindre vas i vit lera med lavafläckar, botten är glaserad i vit glasyr och toppen har en turkos glasyr.",
    available: true,
    category: "Vaser",
  },
  {
    id: 17,
    name: "Skål",
    price: 300,
    image: [imgSkalLapp, imgSkalLapp2],
    description: "Skål i vit lera med lavafläckar som ligger omlott. Halva skålen är glaserad i en grön/grå melerad glasyr.",
    available: true,
    category: "Skålar",
  }
] as Product[];