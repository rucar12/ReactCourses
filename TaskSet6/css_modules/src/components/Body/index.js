import {Contacts, Form} from "../index";

import styles from "./Body.module.scss"

const Body = () => {
  return(
      <div className={styles.about}>
          <Form/>
          <Contacts/>
      </div>
  )
}
export default Body;