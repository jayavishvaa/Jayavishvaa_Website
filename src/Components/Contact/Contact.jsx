import './contact.scss';
// import { useState } from 'react';
import ContactImg from '../../assets/Contact.png'; 
import LinkedIn from '../../assets/LinkedinIcon.png';
import Github from '../../assets/GitHubIcon.png';

export default function Contact() {

    // const [Message, setMessage] = useState(false)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMessage(true);
    // }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={ContactImg} alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                {/* <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {Message && <span>Thanks, I'll reply ASAP :)</span>}
                </form> */}
                <div className="email">
                    <h4>Email:</h4>
                    <span>jvishvaa2001@gmail.com</span>
                </div>
                <div className="Phoneno">
                    <h4>Phone No:</h4>
                    <span>+44 7436213036</span>
                </div>
                <div className="socialIcon">
                    <a href="https://www.linkedin.com/in/jayavishvaa-jayabal-b342b51a3">
                        <img src={LinkedIn} alt="" className="Linkedin"/>
                    </a>
                    <a href="https://github.com/jayavishvaa">
                        <img src={Github} alt="" className="Github"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
