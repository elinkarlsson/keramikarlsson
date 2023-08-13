import { Product } from "./Product.Model";
import imgHus from '../assets/hus.jpg'
import imgDoughnut from '../assets/doughnut.jpg'
import imgMiniVas1 from '../assets/home/mini-vas-1.jpg'
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
import imgVasRand2 from '../assets/vas-rand-1.jpeg'
import imgVasRund from '../assets/vas-rund.jpeg'
import imgVasRund1 from '../assets/vas-rund-1.jpeg'
import imgVasRund2 from '../assets/vas-rund-2.jpeg'
import imgSkalLapp from '../assets/skal-lappad.jpeg'
import imgSkalLapp2 from '../assets/skal-lappad-1.jpeg'
import imgVasMonster from '../assets/vas-monster.jpeg'
import imgVasMonster1 from '../assets/vas-monster-1.jpeg'
import imgVasMonster2 from '../assets/vas-monster-2.jpeg'
import imgKrukaMonster from '../assets/kruka-monster.jpeg'
import imgKrukaMonster1 from '../assets/kruka-monster-1.jpeg'
import imgFatRosa from '../assets/fat-rosa.jpeg'
import imgFatRosa2 from '../assets/fat-rosa-2.jpeg'
import imgFatRod from '../assets/fat-rod.jpeg'
import imgFatHav from '../assets/fat-hav.jpeg'
import imgFatHav1 from '../assets/fat-hav-1.jpeg'
import imgFatHavLitet from '../assets/fat-hav-litet.jpeg'
import imgFatLitetRosa from '../assets/fat-litet-rosa.jpeg'

export const products = [
  {
    id: 1,
    name: "Prydnadshus",
    price: 400,
    image: [imgHus],
    description: "Sött litet prydnadshus 10 x 12 cm. Stengodslera med lavafläckar, vit glasyr.",
    dimensions: "Höjd: 10 cm, Längd: 9 cm, Bredd: 5,5cm.",
    available: 1,
    category: "Prydnader",
  },
  {
    id: 2,
    name: "Vas",
    price: 400,
    image: [imgDoughnut],
    description: "Vas i vit lera med mörk och ljus lila glasyr.",
    dimensions: "Höjd: 8 cm, Diameter: 11 cm. ",
    available: 1,
    category: "Vaser",
  },
  {
    id: 5,
    name: "Vas",
    price: 400,
    image: [imgVas1],
    description: "Vas i vit lera med mörk och ljus lila glasyr.",
    dimensions: "Höjd: 10,5 cm, Diameter: 11 cm.",
    available: 1,
    category: "Vaser",
  },
  {
    id: 3,
    name: "Liten vas",
    price: 100,
    image: [imgMiniVas1],
    description: "Mini vas i vit lera och vit glasyr.",
    dimensions: "Höjd: 6 cm, Diameter: 8 cm",
    available: 1,
    category: "Vaser",
  },
  {
    id: 4,
    name: "Taggig skål",
    price: 400,
    image: [imgTaggig],
    description: "Skål i vit lera och vit glasyr",
    dimensions: "Höjd: 5,5 cm, 13 cm.",
    available: 1,
    category: "Skålar",
  },
  {
    id: 11,
    name: "Kopp",
    price: 200,
    image: [imgKopp1, imgKopp2, imgKopp3, imgKopp4],
    description: "Mindre kopp i vit lera med levafläckar, glaserad i vit glasyr och blå rinnande glasyr längst upp.",
    dimensions: "Höjd: 5,5 cm, Diameter utan handtag: 9 cm",
    available: 1,
    category: "Koppar",
  },
  {
    id: 12,
    name: "Tekanna",
    price: 400,
    image: [imgKanna2, imgKanna1],
    description: "Kanna i svart lera och grön/grå melerad glasyr.",
    dimensions: "Höjd: 9, Diameter: 14 cm, Diamter med pip och handtag: 21 cm.",
    available: 1,
    category: "Tekannor",
  },
  {
    id: 13,
    name: "Skål",
    price: 350,
    image: [imgSkal, imgSkal2],
    description: "Skål i svart lera med bollar på kanten, glaserad i mörk klarblå glasyr.",
    dimensions: "Höjd: 7 cm, Diameter: 15 cm",
    available: 1,
    category: "Skålar",
  },
  {
    id: 14,
    name: "Vas",
    price: 400,
    image: [imgVasUfo, imgVasUfo2],
    description: "Vas i svart lera med grön/grå melerad glasyr.",
    dimensions: "Höjd: 16 cm, 19 cm",
    available: 1,
    category: "Vaser",
  },
  {
    id: 15,
    name: "Vas",
    price: 300,
    image: [imgVasRand, imgVasRand2],
    description: "Vas i svart lera med grön/grå melerad glasyr.",
    dimensions: "Höjd: 11 cm, Diameter: 11 cm",
    available: 1,
    category: "Vaser",
  },
  {
    id: 16,
    name: "Vas",
    price: 300,
    image: [imgVasRund, imgVasRund1, imgVasRund2],
    description: "Mindre vas i vit lera med lavafläckar, botten är glaserad i vit glasyr och toppen har en turkos glasyr.",
    dimensions: "Höjd: 9 cm, Diameter: 10 cm.",
    available: 1,
    category: "Vaser",
  },
  {
    id: 17,
    name: "Skål",
    price: 300,
    image: [imgSkalLapp, imgSkalLapp2],
    description: "Skål i vit lera med lavafläckar som ligger omlott. Halva skålen är glaserad i en grön/grå melerad glasyr.",
    dimensions: "Höjd: 8 cm, Diameter: 18 cm.",
    available: 1,
    category: "Skålar",
  },
  {
    id: 18,
    name: "Mönstrad vas",
    price: 150,
    image: [imgVasMonster, imgVasMonster1, imgVasMonster2],
    description: "Cylenderformad mönstrad vas i svart lera och pärlemor glasyr.",
    dimensions: "Höjd: 12 cm, Diameter: 5,5 cm.",
    available: 2,
    category: "Vaser",
  },
  {
    id: 19,
    name: "Mönstrad kruka",
    price: 200,
    image: [imgKrukaMonster1, imgKrukaMonster],
    description: "Cylenderformad mönstrad kruka i svart lera och vit glasyr.",
    dimensions: "Höjd: 9 cm, Diameter: 10 cm.",
    available: 2,
    category: "Krukor",
  },
  {
    id: 20,
    name: "Fat",
    price: 200,
    image: [imgFatRosa],
    description: "Fat i svart lera och marmorerad glasyr i rosa/turkos.",
    dimensions: "Längd: 25 cm, Bredd: 15 cm.",
    available: 1,
    category: "Fat",
  },
  {
    id: 21,
    name: "Fat",
    price: 200,
    image: [imgFatRosa2],
    description: "Fat i svart lera och marmorerad glasyr i rosa/turkos.",
    dimensions: "Längd: 25 cm, Bredd: 12 cm.",
    available: 1,
    category: "Fat",
  },
  {
    id: 22,
    name: "Fat",
    price: 200,
    image: [imgFatRod],
    description: "Fat i svart lera och marmorerad glasyr i rosa/turkos.",
    dimensions: "Längd: 25 cm, Bredd: 15 cm.",
    available: 1,
    category: "Fat",
  },
  {
    id: 23,
    name: "Fat",
    price: 200,
    image: [imgFatHav, imgFatHav1],
    description: "Fat i svart lera med havsinspirerat motiv.",
    dimensions: "Längd: 29 cm, Bredd: 14 cm.",
    available: 1,
    category: "Fat",
  },
  {
    id: 24,
    name: "Fat",
    price: 100,
    image: [imgFatHavLitet],
    description: "Fat i svart lera med havsinspirerat motiv.",
    dimensions: "Längd: 17 cm, Bredd: 9 cm.",
    available: 1,
    category: "Fat",
  },
  {
    id: 25,
    name: "Fat",
    price: 100,
    image: [imgFatLitetRosa],
    description: "Fat i svart lera med marmorerad glasyr i rosa och turkos.",
    dimensions: "Längd: 19 cm, Bredd: 9 cm.",
    available: 1,
    category: "Fat",
  }
] as Product[];