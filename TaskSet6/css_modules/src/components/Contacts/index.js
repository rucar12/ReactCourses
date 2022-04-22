import styles from "./Contacts.module.scss"

import phone from "../../img/phone3png.png";
import mail from "../../img/mail2.png";
import whatsapp from "../../img/whatsapp2.png";
import viber from "../../img/viber.png";
import messenger from "../../img/messenger.png";
import telegram from "../../img/telegram.png";


const Contacts = () => {
    return (
        <div className={ styles.contacts }>
            <div className={styles.line}></div>
            <div className={ styles.contacts__general }>
                <div className={ styles.contacts__general_item }>
                    <div className={ styles.contacts__title }>Phone</div>
                    <div className={styles.contacts__general_item_box}>
                        <img className={ styles.contacts__icon } src={phone}/>
                        <div className={ styles.contacts__text }>+34 965 020784</div>
                    </div>

                </div>
                <div className={ styles.contacts__general_item }>
                    <div className={ styles.contacts__title }>Office in Spain</div>
                    <div className={ styles.contacts__text }>Centro Comercial Playa Flamenca C / Niagara,
                            63 Local 60/PB, first floor, 03189 - Orihuela
                            Costa (Alicante), Spain
                    </div>
                </div>
                <div className={ styles.contacts__general_item }>
                    <div className={ styles.contacts__title }>E-mail</div>
                    <div className={styles.contacts__general_item_box}>
                        <img className={ styles.contacts__icon } src={mail}/>
                        <div className={ styles.contacts__text }>sales@wtgspain.c om</div>
                    </div>
                </div>
            </div>
            <div className={ styles.contacts__online }>
                <div className={styles.line}></div>
                <div className={ styles.contacts__online_title }>We are online</div>
                <div className={ styles.contacts__online_items }>
                    <div className={ styles.contacts__online_item }>
                        <img className={ styles.contacts__icon } src={whatsapp}/>
                        <div className={ styles.contacts__text }>WhatsApp</div>
                    </div>
                    <div className={ styles.contacts__online_item }>
                        <img className={ styles.contacts__icon } src={viber}/>
                        <div className={ styles.contacts__text }>Viber</div>
                    </div>
                    <div className={ styles.contacts__online_item }>
                        <img className={ styles.contacts__icon } src={messenger}/>
                        <div className={ styles.contacts__text }>Messenger</div>
                    </div>
                    <div className={ styles.contacts__online_item }>
                        <img className={ styles.contacts__icon } src={telegram}/>
                        <div className={ styles.contacts__text }>Telegram</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts