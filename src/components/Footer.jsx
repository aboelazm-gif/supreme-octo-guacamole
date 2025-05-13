import React from 'react';
import '../styles/footer.css';
import FooterModal from "./FooterModal.jsx"
import arrowR from '../assets/svg/right-arrow.svg';
const Footer = () => {
  return (
    <footer className="footer">
        <p className='footer-title'>© 2025 Arab Academy Motors. All rights reserved.</p>
        <ul className='footer-list'>
            <FooterModal trigger={<li><div className="faq f-list-item">FAQ</div><img className='arrow-r' src={arrowR} alt="" /></li>}/>
            <li><div className="socials f-list-item">Socials</div><img className='arrow-r' src={arrowR} alt="" /></li>
            <a href="mailto:AAMRACINGTEAM@Egypt.AAST.edu" target='_blank'><li><div className="contact-us f-list-item">Contact us</div><img className='arrow-r' src={arrowR} alt="" /></li></a>
        </ul>           
    </footer>
  )
}
export default Footer;