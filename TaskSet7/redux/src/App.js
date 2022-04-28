import {useContext, useState} from "react";
import {useSelector} from "react-redux";

import {Form, Works} from "./components";
import {Grid, Typography} from "@mui/material";

import styles from './App.module.scss';
import {ThemeContext} from "./context/styles";



function App() {
    const theme = useContext(ThemeContext);

    const [themes, setThemes] = useState(theme.light);
    const works = useSelector(state => state.useReducer.works)


    const changeTheme = () => {
        if (themes === theme.light){
            setThemes(theme.dark)
        } else {
            setThemes(theme.light)
        }
    }

    return (
        <div className={styles.app  } style={{background:themes.background, color:themes.color}}>
            <Typography onClick={changeTheme} className={styles.app__title} style={{fontFamily: "Comic Sans MS",fontSize: "5vh" ,fontWeight: "bold"}} variant="h5" component="div">
                Work list
            </Typography>
            {themes===theme.light ?
                <>
                    <Typography style={{textAlign:"center"}} onClick={changeTheme}>
                        😇 click me pls
                    </Typography>
                    <br/>
                </>
            :
                <>
                    <Typography style={{textAlign:"center"}} onClick={changeTheme}>
                        😈 click me pls
                    </Typography>
                    <br/>
                </>}
            <Grid container spacing={2}>
                <Grid xs={12} >
                    <Form />
                </Grid>
                <Grid item  xs={10}>
                    <Works works={works}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
