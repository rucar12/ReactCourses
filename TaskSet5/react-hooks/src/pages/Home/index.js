import "./Home.scss";
import {useContext, createContext, useRef, useEffect, useState, useCallback,useReducer} from "react";


const themes = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "black",
        color: "white"
    },
    ukraine: {
        background: "blue",
        color: "yellow"
    }
}

const ThemesContext = createContext(themes);



function reducer(state, action) {
    switch (action.type) {
        case "dark":
            action.state.current.style.background = action.theme.dark.background;
            action.state.current.style.color = action.theme.dark.color;
            break;
        case "light":
            action.state.current.style.background = action.theme.light.background;
            action.state.current.style.color = action.theme.light.color;
            break;
        case "ukraine":
            action.state.current.style.background = action.theme.ukraine.background;
            action.state.current.style.color = action.theme.ukraine.color;
            break;
    }
}


const Home = ({user}) => {

    const theme = useContext(ThemesContext);
    const homeRef = useRef();
    const [themeState, setThemeState] = useState(1);
    const [state, dispatch] = useReducer(reducer, '');


    useEffect(() => {
        setTimeout(startShow ,1000)
        //Can use interval for hardcore ))
    }, [themeState]);

    const startShow = () => {
        dispatch({
            type:themeType(themeState, setThemeState),
            state:homeRef,
            theme: theme
        })
    }

    const themeType = useCallback(() => {
        const type = Math.floor(Math.random()*3);
        //i must comment this part for useCallback
        /*if (themeState===type){
            return themeType()
        } else {
            setThemeState(type);
        }*/
        //with this part cycle will be infinite
        setThemeState(type);
        switch (type){
            case 0:
                return "dark";
            case 1:
                return "light";
            case 2:
                return "ukraine";
        }
    }, [themeState])

    return (
        <>
            <div className={"home"} ref={homeRef} >
                Welcome, dear {`${user.surname}  ${user.name}`}
                <div>
                    Click-cluck
                </div>
                <button onClick={startShow} className={"btn"}> crash eyes</button>
            </div>
        </>
    );

}

export default Home;