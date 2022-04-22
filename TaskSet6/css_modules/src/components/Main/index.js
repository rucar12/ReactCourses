import styles from "./Main.module.scss";

const Main = () => {
  return(
      <div className={ styles.main }>
        <div className={ styles.main__container }>
            <div className={ styles.main__title }>WTG SPAIN</div>
            <div className={ styles.main__ask }>
                some help
            </div>
            <div className={ styles.main__adv }>Contact us right now and our team will do everything to help you.</div>
            <button className={ styles.main__btn }>Contact us</button>
        </div>
      </div>
  )
}

export default Main;