import styles from "./Form.module.scss"

import map from "../../img/map.png"


const Form = () => {
    return (
        <div className={ styles.form }>
            <div className={ styles.form__text }>
                We are always in touch and will be happy to resolve any of your questions.
            </div>
            <div className={ styles.form__company }>
                <img className={ styles.form__map } src={map} />
                <div className={ styles.form__contact_us }>
                    <div className={ styles.form__title }>Contact us</div>
                    <input className={ styles.form__input } placeholder={"Name"} maxLength={"15"} required/><br/>
                    <input className={ styles.form__input } placeholder={"Phone"} type={"number"} maxLength={"13"} required/><br/>
                    <input className={ styles.form__input } placeholder={"E-mail"} maxLength={"40"} required/><br/>
                    <textarea className={ styles.form__textarea } placeholder={"Message"} maxLength={"200"} required/><br/>
                    <input className={ styles.form__submit } type={"submit"} value={"Send"}/>
                    <div className={ styles.form__privacy }>Privacy policy</div>
                </div>
            </div>
        </div>
    )
}

export default Form;