import './Home.css'
import Thumbnail from '../Thumbnail/Thumbnail'
import imgVas from '../assets/home/vas.jpg'
import imgKoppar from '../assets/home/koppar.jpg'
import imgMini from '../assets/mini.jpg'
import imgVasSt from '../assets/vas-2-st.jpg'

export default function Home() {
  return (
    <div className="home-page">
      <div className='home-gallery'>
        <div className='home-gallery__row'>
          <div className='home-gallery__col-3'>
            <a href="/shop/skulpturer" className="home-gallery__link">
              <img width="600" src={imgVas} className="home-gallery__img" />
              <div className="home-gallery__middle">
                <div className="home-gallery__text">Vaser</div>
              </div>
            </a>
          </div>
          <div className='home-gallery__col-3'>
            <a href="/shop/skulpturer" className="home-gallery__link">
              <img width="600" src={imgKoppar} className="home-gallery__img" />
              <div className="home-gallery__middle">
                <div className="home-gallery__text">Koppar</div>
              </div>
            </a>
          </div>
          <div className='home-gallery__col-3'>
            <a href="/shop/skulpturer" className="home-gallery__link">
              <img width="600" src={imgVas} className="home-gallery__img" />
              <div className="home-gallery__middle">
                <div className="home-gallery__text">Fat</div>
              </div>
            </a>
          </div>
        </div>
        <div className='home-gallery__row'>
          <div className='home-gallery__col-2'>
            <a href="/shop/vaser" className="home-gallery__link">
              <img width="600" src={imgMini} className="home-gallery__img" />
              <div className="home-gallery__middle">
                <div className="home-gallery__text">Skålar</div>
              </div>
            </a>
          </div>
          <div className='home-gallery__col-2'>
            <a href="/shop/vaser" className="home-gallery__link">
              <img width="600" src={imgVasSt} className="home-gallery__img" />
              <div className="home-gallery__middle">
                <div className="home-gallery__text">Vaser</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}