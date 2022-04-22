import {About, Footer, Header} from "./components";

import  msg from "./img/chat.png";

import './App.scss';

function App() {
  return (
    <div className={"app"}>
        <img className={"app__msg"} src={msg}/>
        <Header/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
