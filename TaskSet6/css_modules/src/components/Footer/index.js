import styles from  "./Footer.module.scss" ;

import logo from  "../../img/logo_white.png"
import phone from  "../../img/phone.png"
import mail from  "../../img/msg.png"
import location from  "../../img/geoloc.png"
import star from  "../../img/Star.png"
import facebook from  "../../img/facebook.png"
import instagram from  "../../img/instagram.png"
import youtube from  "../../img/youtube.png"
import linkedin from  "../../img/linkedin.png"


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__logo}>
                <img src={logo}/>
            </div>
            <div className={styles.footer__title}>real estate in Spain </div>
            <div className={styles.line}></div>
            <div className={styles.footer__nav}>
                <div className={styles.footer__nav_item}>All cities</div>
                <div className={styles.footer__nav_item}>Blog</div>
                <div className={styles.footer__nav_item}>Video</div>
                <div className={styles.footer__nav_item}>Contacts</div>
            </div>
            <div className={styles.footer__about}>
                <div className={styles.footer__contacts}>
                    <div className={styles.footer__contacts_title}>Contacts:</div>
                    <div className={styles.footer__contacts_item}>
                        <img className={styles.footer__contacts_icon} src={phone} />
                        <div className={styles.footer__contacts_text}>
                            +34 (965) 020 _ 784
                        </div>
                    </div>
                    <div className={styles.footer__contacts_item}>
                        <img className={styles.footer__contacts_icon} src={mail} />
                        <div className={styles.footer__contacts_text}>
                            sales@wtgspain.com
                        </div>
                    </div>
                    <div className={styles.footer__contacts_item}>
                        <img className={styles.footer__contacts_icon} src={location}/>
                        <div className={styles.footer__contacts_text}>
                            Centro Comercial «Playa Flamenca»
                            C/ Niagara, 63 Local 60/PB, first floor,
                            03189 _ Orihuela Costa (Alicante), Spain
                        </div>
                    </div>
                    <div className={styles.footer__contacts_item}>
                        <div className={styles.footer__reating}>
                            <div className={styles.footer__reating_text}>Reating 4.9/5:</div>
                            <img className={styles.footer__reating_icon} src={star}/>
                            <img className={styles.footer__reating_icon} src={star}/>
                            <img className={styles.footer__reating_icon} src={star}/>
                            <img className={styles.footer__reating_icon} src={star}/>
                            <img className={styles.footer__reating_icon} src={star}/>
                            <div className={styles.footer__reating_votes}>820 votes</div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__type}>
                    <div className={styles.footer__type_title}>Type:</div>
                    <div className={styles.footer__type_item}>
                        <div className={styles.footer__type_text}>Appartaments</div>
                    </div>
                    <div className={styles.footer__type_item}>
                        <div className={styles.footer__type_text}>Penthousses</div>
                    </div>
                    <div className={styles.footer__type_item}>
                        <div className={styles.footer__type_text}>Townhouses</div>
                    </div>
                    <div className={styles.footer__type_item}>
                        <div className={styles.footer__type_text}>Commercial</div>
                    </div>
                    <div className={styles.footer__type_item}>
                        <div className={styles.footer__type_text}>Bungalows</div>
                    </div>
                    <div className={styles.footer__type_item}>
                        <div className={styles.footer__type_text}>Duplexes</div>
                    </div>
                    <div className={styles.footer__type_item}>
                        <div className={styles.footer__type_text}>Villas</div>
                    </div>
                </div>
                <div className={styles.footer__follow_us}>
                    <div className={styles.footer__follow_us_title}>Follow us:</div>
                    <div className={ styles.footer__follow_us_items }>
                        <div className={ styles.footer__follow_us_item }>
                            <img className={ styles.footer__follow_us_icon } src={facebook}/>
                            <div className={ styles.footer__follow_us_text }>Facebook</div>
                        </div>
                        <div className={ styles.footer__follow_us_item }>
                            <img className={ styles.footer__follow_us_icon } src={youtube}/>
                            <div className={ styles.footer__follow_us_text }>YouTube</div>
                        </div>
                    </div>
                    <div className={ styles.footer__follow_us_items }>
                        <div className={ styles.footer__follow_us_item }>
                            <img className={ styles.footer__follow_us_icon } src={linkedin}/>
                            <div className={ styles.footer__follow_us_text }>Linkedin</div>
                        </div>
                        <div className={ styles.footer__follow_us_item }>
                            <img className={ styles.footer__follow_us_icon } src={instagram}/>
                            <div className={ styles.footer__follow_us_text }>Instagram</div>
                        </div>
                    </div>
                    <div className={ styles.footer__subscribe }>
                        <div className={ styles.footer__subscribe_text }>
                            Subscribe to new objects  {"   "}
                        </div>
                        <input className={ styles.footer__subscribe_input } name={ "email" } maxLength={"25"} required placeholder={ "Your email" }/>
                        <input className={ styles.footer__subscribe_submit } type={ "submit" } value={ "Subscribe" }/>
                    </div>
                </div>
            </div>
            <div className={ styles.footer__copyright }>
                <div className={styles.footer__copyright_text}>
                    The company  WTG Spain  specializes in the investment and sale of real estate in Spain, and the provision of legal and consulting services.
                    All rights reserved.  WTG Spain  _ The Best Real Estate in Spain. © Copyright 2007 _ 2020.
                </div>
            </div>
        </div>
    )
}

export default Footer;