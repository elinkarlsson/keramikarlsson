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
            elin.karlsson.92@hotmail.com
          </p>
          <p>
            <span className="material-icons material-icons-outlined">phone</span>
            0703294590
          </p>
        </div>
        <div className="column">
          <h2>Följ</h2>
          <a href="https://www.instagram.com/keramikarlsson/" target="_blank"><img className='instagram-icon' src={instagramIcon} />Instagram</a>
        </div>
      </div>
    </div>);
}