import {createContext} from "react";

const themes = {
    light: {
        background: "000"
    },
    dark: {
        background: "fff"
    }
}

const ThemesContext = createContext(themes);

