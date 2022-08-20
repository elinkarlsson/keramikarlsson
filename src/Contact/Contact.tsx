import './Contact.css'
import instagramIcon from '../assets/icons/instagram-logo.png'

export default function Contact() {
  document.title = 'Kontakt - KeramiKarlsson';
  return (
    <div className="contact-page">
      <div className="row">
        <div className="column">
          <h2>Kontakt</h2>
          <p>
            <span className="material-icons material-icons-outlined">email</span>
            elin@kodochkonst.se
          </p>
          <p>
            <span className="material-icons material-icons-outlined">phone</span>
            0703294590
          </p>
        </div>
        <div className="column">
          <h2>Följ</h2>
          <a href="https://www.instagram.com/keramikarlsson/" target="_blank"><img className='instagram-icon' src={instagramIcon} alt="Ikon för instagram" />Instagram</a>
        </div>
      </div>
      <div className="row">
        <div className='column'>
        <h2>Om</h2>
        <h3 className="margin-b-0 margin-t-0">Utbildning</h3>
        <p className="margin-b-0 margin-t-0">2019 Medborgarskolan keramikkurs sommar</p>
        <p className="margin-b-0 margin-t-0">2020 Medborgarskolan keramikkurs sommar</p>
        <p className="margin-b-0 margin-t-0">2020 Medborgarskolan keramikkurs höst</p>
        <p className="margin-b-0 margin-t-0">2021 Medborgarskolan keramikkurs höst</p>
        <p className="margin-b-0 margin-t-0">2022 Medborgarskolan keramikkurs vår</p>
        <h3 className="margin-b-0">Utställningar</h3>
        <p className="margin-b-0 margin-t-0">2022 Gamlestadsgalej, Attic Studio</p>
        </div>
      </div>
    </div>);
}