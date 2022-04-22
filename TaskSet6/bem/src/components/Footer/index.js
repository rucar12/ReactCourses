import {NavLink} from "react-router-dom";

import geo from  "../../img/geoloc.png"
import mail from  "../../img/mail.png"
import phone from  "../../img/phone.png"

import "./Footer.scss";

const Footer = () => {

    return(
     <div className={"footer"}>
        <div className={"footer__menu"}>
            <div className={"footer__menu-items"}>
                <NavLink to={"#"} className={"footer__menu-item"}>Preise</NavLink>
                <NavLink to={"#"} className={"footer__menu-item"}>Referenzen</NavLink>
                <NavLink to={"#"} className={"footer__menu-item"}>Kontakt</NavLink>
            </div>
        </div>
        <div className={"footer__feedback"}>
            <div className={"footer__contact"}>
                <div className={"footer__contact-items"}>
                    <div className={"footer__contact-item"}>
                        <span className={"footer__contact-icons"}><img className={"footer__contact-icon"} src={geo}  /></span>
                        <span className={"footer__contact-text"}>Poststr, 45, 44890 Hamburg</span>
                    </div>
                    <div className={"footer__contact-item"}>
                        <span className={"footer__contact-icons"}><img className={"footer__contact-icon"} src={mail}  /></span>
                        <span className={"footer__contact-text"}>HELLO@TRATATA.DE</span>
                    </div>
                    <div className={"footer__contact-item"}>
                        <span className={"footer__contact-icons"}><img className={"footer__contact-icon"} src={phone}  /></span>
                        <span className={"footer__contact-text"}>040 380-33- 44</span>
                    </div>
                </div>
            </div>
            <div className={"footer__form"}>
                <div className={"footer__form-title"}>Schreiben Sie uns!</div>
                <form className={"footer__form-inputs"}>
                    <input className={"footer__form-input input-company"} name={"company"} maxLength={"40"}required placeholder={"Figma / Organization"}/>
                    <div>
                        <input className={"footer__form-input input-mail"} name={"mail"} maxLength={"40"}required placeholder={"E-mail"}/>
                        <input className={"footer__form-input input-phone"}  name={"phone"} maxLength={"13"} required placeholder={"Telefon"} type={"number"}/>
                    </div>
                    <textarea className={"footer__form-input input-description"} name={"description"} maxLength={"200"}  required placeholder={"Was ist ihr anliegen?"} />
                    <div>
                        <input className={"footer__form-submit"} type={"submit"} value={"SENDEN"}/>
                    </div>
                </form>
            </div>
        </div>
        <div className={"copyright"}>
            <div className={"copyright__text"}>
                © 2019  Genius Web Agentur. Alle Rechte vorbehalten
            </div>
        </div>
     </div>
    )
}

export default Footer;