import {Route, Routes} from "react-router-dom";
import {useMemo, useState} from "react";

import {Home, Landing, News, Profile, NotFound} from "./pages";
import {LoginForm} from "./modules";

import './App.scss';

const createUser = (name, surname) => {
    const user = {name, surname};
    return user;
}

const App = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const user = useMemo(() => createUser(name, surname), [name, surname]);

    return (
        <div className="app">
            <Routes>
                {name &&<Route path={"/"} element={<Landing setName={setName} setSurname={setSurname}/>}>
                    <Route index element={<Home user={user}/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/profile"} element={<Profile setName={setName} setSurname={setSurname}/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Route>}
                {!name
                &&<Route path={"/login"} element={<LoginForm name={name} setName={setName} surname={surname} setSurname={setSurname}/>}/>
                &&<Route path={"*"} element={<LoginForm name={name} setName={setName} surname={surname} setSurname={setSurname}/>}/>
                }
            </Routes>
        </div>
    );
}

export default App;
