
import {useNavigate} from "react-router-dom";

import "./LoginForm.scss"

const LoginForm = ({setName,setSurname, name, surname}) => {

    const navigate = useNavigate();
    
    const loggedIn = () => {
        setName(name);
        setSurname(surname);
        navigate("/")
    }
    
  return(
    <div className={"login"}>
      <form className={"login-form"}>
          <div className={"login-form-name"}>
              <span className={"login-form-name-title"}>Name: </span>
              <input className={"login-form-name-input"} name={"name"} onChange={(el)=>name=(el.target.value)} type={"text"} placeholder={"Enter your name..."} maxLength={"15"} required/>
          </div>
          <div className={"login-form-surname"}>
              <span className={"login-form-surname-title"}>Surname: </span>
              <input className={"login-form-surname-input"} name={"surname"} onChange={(el)=>surname=(el.target.value)} type={"text"} placeholder={"Enter your surname..."} maxLength={"15"} required/>
          </div>
        <input className={"login-form-submit"} type={"submit"} value={"Log in"} onClick={loggedIn}/>
      </form>
    </div>
  );
}

export default LoginForm;