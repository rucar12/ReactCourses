import styles from  './App.module.scss';
import {Footer, Body, Header, Main} from "./components";
import {BrowserRouter} from "react-router-dom";

import arrow from "./img/arrow_top.png";

function App() {
  return (
    <div className={styles.app}>
        <img src={arrow} className={styles.app__arrow}/>
      <BrowserRouter>
          <Header/>
          <Main/>
          <Body/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
