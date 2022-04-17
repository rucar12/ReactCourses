import {NavLink, Outlet} from "react-router-dom";
import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

import "./Landing.scss";


const Landing = ({setName, setSurname}) => {

    const [menu, setMenu] = useState(true);

    return (
        <>
            <div className={"header"}>
                <div className={"header-box-menu"}>
                    <FontAwesomeIcon icon={faBars} onClick={() => setMenu(!menu)}/>
                </div>
                <div className={"header-box-company"}>
                    Infinity
                </div>
                <div className={"header-box-user"}>
                    <div className={"header-box-user-info"}>

                    </div>
                    <div className={"header-box-user-loggout"}>
                        <NavLink className={"header-box-user-loggout-icon"} to={"/login"} onClick={() => {
                            setName(null);
                            setSurname(null);
                        }}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={"content"}>
                {menu && <div className={"menu"}>
                    <NavLink to={"/"} className={"menu-item"}>Home</NavLink>
                    <NavLink to={"/profile"} className={"menu-item"}>Profile</NavLink>
                    <NavLink to={"/news"} className={"menu-item"}>News</NavLink>
                </div>}
                <div className={"content-box"}>
                    <Outlet/>
                </div>
            </div>

        </>
    );

}

export default Landing;