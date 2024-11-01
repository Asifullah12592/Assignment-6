import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";


export function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-logo">
                <img src="../images/logo.png" alt="" />
            </div>
            <div className="footer-content">
                <div className="footer-box1">
                    <h1>infomation</h1>
                    <ul>
                    <li>MAIN</li>
                        <li>GALLERY</li>
                        <li>PROJECTS</li>
                        <li>CERTIFICATION</li>
                        <li>CONTACTS</li>
                    </ul>
                  
                </div>
                <div className="footer-box2">
                    <h1>Contacts</h1>
                  <div className="main-icons">
                    <div className="icons"><IoLocationOutline/></div>
                    <div className="icons-text"><p>3693 street-8  Karachi</p></div>
                  </div>
                  <br />
                
                  <div className="main-icons">
                    <div className="icons"><MdOutlineLocalPhone/></div>
                    <div className="icons-text"><p>03422703531</p></div>
                  </div>
                  <br />
                  <br />
                  <div className="main-icons">
                    <div className="icons"><TfiEmail/></div>
                    <div className="icons-text"><p>asifkhan12592@gmail.con</p></div>
                  </div>
                 

                </div>
            </div>
            <div className='main-footer-icons'>

                <h1>Social Media</h1>
            <div className="footer-icons">

                <div><ImFacebook/></div>
                <div><IoLogoTwitter /></div>
                <div><FaLinkedin/></div>
                <div><FaWhatsappSquare/></div>
            </div>
            </div>
        </div>
    )
}