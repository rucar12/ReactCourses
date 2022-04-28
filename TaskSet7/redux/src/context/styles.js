import {createContext} from "react";

const themes = {
    light: {
        color: '#555555',
        background: '#eeeeee',
    },
    dark: {
        color: '#ffffff',
        background: '#555555',
    },
};

export const ThemeContext = createContext(
    themes
);