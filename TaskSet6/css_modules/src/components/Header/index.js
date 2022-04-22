import {NavLink} from "react-router-dom";

import styles from "./Header.module.scss";

import mail from '../../img/msg.png';
import phone from '../../img/phone2.png';
import whatsapp from '../../img/whatsapp.png';
import flag from '../../img/greate_britain.png';
import heart from '../../img/heart active.png';
import logo from  '../../img/logo.png'


const Header = () => {
  return (
      <div className={styles.header }>
        <div className={styles.header__info }>
            <div className={styles.header__contacts }>
                <div className={styles.header__contacts_item }>
                    <img className={styles.header__contacts_icon  } src={mail} alt={"mail"}/>
                    <div className={styles.header__contacts_text  }>sales@wtgspain.com</div>
                </div>
                <div className={styles.header__contacts_item }>
                    <img className={styles.header__contacts_icon  } src={phone} alt={"phone"}/>
                    <div className={styles.header__contacts_text  }>+34 965 020784</div>
                </div>
                <div className={styles.header__contacts_item }>
                    <img className={styles.header__contacts_icon  } src={whatsapp} alt={"whatsapp"}/>
                    <div className={styles.header__contacts_text  }>WhatsApp</div>
                </div>
            </div>
            <div className={styles.header__other }>
                <div className={styles.header__other_item }>
                    <img className={styles.header__other_icon,  styles.heart} src={heart} alt={"like"}/>
                </div>
                <div className={styles.header__other_item }>
                    <img className={styles.header__other_icon  } src={flag} alt={"flag"}/>
                </div>
            </div>
        </div>
        <div className={styles.header__nav }>
            <div className={styles.header__logo }>
                <img className={styles.header__logo_icon } src={logo}/>
            </div>
            <nav className={styles.header__links }>
                <NavLink to={"#"} className={styles.header__link }>Cities</NavLink>
                <NavLink to={"#"} className={styles.header__link }>Properties</NavLink>
                <NavLink to={"#"} className={styles.header__link }>Blog</NavLink>
                <NavLink to={"#"} className={styles.header__link }>Video</NavLink>
                <NavLink to={"#"} className={styles.header__link }>Contacts</NavLink>
            </nav>
            <div className={styles.header__auth }>
                <div className={styles.header__login }>Log in</div>
                <div className={styles.header__signup }>Sign up</div>
            </div>
        </div>
      </div>
  )
}

export default Header;