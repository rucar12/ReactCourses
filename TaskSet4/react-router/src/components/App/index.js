import {Routes, Route} from "react-router-dom";
import {About, Home, Posts, NotFound, Post, Login, Landing} from "../../pages";
import {useState, useEffect} from "react";

import './App.css';

const App = () => {

    const [user, setUser] = useState(null);

    const login = () => {
        setUser(true);
    }
    const logout = () => {
      setUser(false);
    }

  return (
    <div className={"container"}>
        <Routes>
            <Route path={"/"} element={<Landing onLogout={logout}/>}>
            {!user &&(
                <Route path={"/login"} element={<Login onLogin={login} />}/>
            )}
                <Route index element={user?<Home/>:<NotFound/>}/>
                <Route path={"/about"} element={user  ? <About/> : <NotFound/>}/>
                <Route path={"/post"} element={user ?<Posts/>:<NotFound/>}/>
                <Route path={"/post/:id"} element={user ?<Post/>:<NotFound/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
