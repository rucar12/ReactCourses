import {NavLink, Outlet} from "react-router-dom";
import {ExportOutlined, InstagramOutlined, SendOutlined} from "@ant-design/icons";

import "./Landing.css";


const Landing = ({onLogout}) => {

    return (
        <>
            <div className={"header"}>
                <div className={"header-col"}>

                </div>
                <div className={"header-col"}>
                    <NavLink className={"header-page"} to={"/"} >Home </NavLink>
                    <NavLink className={"header-page"} to={"/post"} >Posts </NavLink>
                    <NavLink className={"header-page"} to={"/about"} >About</NavLink>
                </div>
                <div className={"header-col"}>
                    {/*{user &&(<NavLink className={"logout"} to={"/login"} onClick={onLogout}><ExportOutlined /></NavLink>)}*/}
                    <NavLink className={"logout"} to={"/login"} onClick={onLogout}><ExportOutlined /></NavLink>
                </div>
            </div>
            <Outlet/>
            <div className={"footer"}>
                <div className={"footer-item"}>
                    © 2022 / Матеріали сайту не захищені законом "Про авторське та суміжні права". Копіювання матеріалів сайту у будь-якому вигляді без дозволу редакції сайту заборонено!
                </div>
                <div className={"footer-item"}>
                    Контакти:
                    <a className={"contact_links"} href={"https://t.me/liubomir333"}>
                        <SendOutlined/>
                    </a>
                    <a className={"contact_links"} href={"https://www.instagram.com/liubomir333"}>
                        <InstagramOutlined/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Landing;
