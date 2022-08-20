import './Home.css'
import imgVas from '../assets/home/vas.jpg'
import imgKoppar from '../assets/home/koppar.jpg'
import imgFat from '../assets/gront-fat-4.jpg'
import imgMini from '../assets/mini.jpg'
import imgVasSt from '../assets/vas-2-st.jpg'
import imgVasMedHal4 from '../assets/vas-med-hal-4.jpg'
import imgHus from '../assets/hus.jpg'
import imgKopp from '../assets/kopp-1.jpg'
import imgPlattFat from '../assets/platt-fat-1.jpg'
import imgtaggig from '../assets/taggig.jpg'
import imgVasMedHal from '../assets/vas-med-hal-1.jpg'
import imgMiniVas from '../assets/mini-vas-1.jpg'

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
          <img className='w-100' src={imgPlattFat} />
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