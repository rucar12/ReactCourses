import styles from "./Works.module.scss";
import {Work} from "../index";
import {editWork} from "../../store/actions/actions";
import {Typography} from "@mui/material";

const Works = ({works}) => {

    return(
        <div className={styles.works}>
            {works.length
                ?
                    works.map((work) => <Work key={work.id} work={work} id={work.id} onClick={() => editWork(work.id)}/>)
                :
                <Typography  className={styles.works__comment} style={{fontFamily: "Comic Sans MS",fontSize: "5vh" ,fontWeight: "bold"}}component="div">
                    Ky-ky
                </Typography>
            }
        </div>
    )

}

export default Works;