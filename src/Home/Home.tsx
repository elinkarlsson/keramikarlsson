import './Home.css'
import imgVas from '../assets/home/vas.jpg'
import imgKoppar from '../assets/home/koppar.jpg'
import imgFat from '../assets/fat-hav.jpeg'
import imgMini from '../assets/home/mini.jpg'
import imgVasSt from '../assets/vas-2-st.jpg'
import imgVasMedHal4 from '../assets/home/vas-rund.jpeg'
import imgHus from '../assets/hus.jpg'
import imgKopp from '../assets/kopp-1.jpg'
import imgtaggig from '../assets/taggig.jpg'
import imgVasMedHal from '../assets/home/vas-ufo.jpeg'
import imgMiniVas from '../assets/home/mini-vas-1.jpg'
import imgFatRosa from '../assets/home/fat-rosa-1.jpeg'

export default function Home() {
  return (
    <div className="home-page">
      <div className='home-gallery-row'>
        <div className='home-gallery-column'>
          <img className='w-100' src={imgVas} />
          <img className='w-100' src={imgFat} />
          <img className='w-100' src={imgMini} />
        </div>
        <div className='home-gallery-column'>
          <img className='w-100' src={imgKopp} />
          <img className='w-100' src={imgVasSt} />
          <img className='w-100' src={imgKoppar} />
        </div>
        <div className='home-gallery-column'>
          <img className='w-100' src={imgVasMedHal} />
          <img className='w-100' src={imgMiniVas} />
          <img className='w-100' src={imgFatRosa} />
        </div>
        <div className='home-gallery-column'>
          <img className='w-100' src={imgHus} />
          <img className='w-100' src={imgVasMedHal4} />
          <img className='w-100' src={imgtaggig} />
        </div>
      </div>
    </div>
  )
}