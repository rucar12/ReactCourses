import {Contacts, Form} from "../index";

import styles from "./Body.scss"

const Body = () => {
  return(
      <div className={styles.about}>
          <Form/>
          <Contacts/>
      </div>
  )
}
export default Body;