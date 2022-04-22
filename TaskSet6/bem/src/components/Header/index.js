import {NavLink} from "react-router-dom";

import "./Header.scss"

const Header = () => {

    return (

    <div className={"header"}>
        <div className={"header__navigate"}>
            <div className={"header__logo"}>
                <div className={"header__logo-text"}>GENIUS</div>
            </div>
            <div className={"header__menu"}>
                <div className={"header__menu-items"}>
                    <NavLink to={"#"} className={"header__menu-item"}>PREISE</NavLink>
                    <NavLink to={"#"} className={"header__menu-item"}>REFERENZEN</NavLink>
                    <NavLink to={"#"} className={"header__menu-item"}>KONTAKT</NavLink>
                </div>
            </div>
            <div className={"header__menu-lang"}>
                <div className={"header__menu-lang-box"}>
                    <select className={"header__menu-lang-text"} name={"select"}>
                        <option value={"value1"} selected>EN</option>
                        <option value={"value2"} >DE</option>
                        <option value={"value3"} >UA</option>
                    </select>
                </div>
            </div>
            {/*<form>
            <input className={"header__menu-lang"} list={"language"}/>
            <datalist id={"language"}>
                <option>ENG</option>
                <option>DEU</option>
                <option>UA</option>
            </datalist>
            </form> */}
        </div>
        <div className={"header__img"}></div>
    </div>

    );
}

export default Header;