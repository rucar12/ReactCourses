
import {useDispatch} from "react-redux";
import {useState} from "react";

import {Button, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import {delWork, editWork} from "../../store/actions/actions";

import styles from "./Work.module.scss"


const Work = ({work}) => {

    const dispatch = useDispatch();
    const [newData, setNewData] = useState({name:'', description:''})
    const [edit, setEdit] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setNewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const removeWork = () => {
        dispatch(delWork(work.id))
    }

    const updateWork = () => {
        if (newData.name===work.name){
            alert("Ви не вказали роботу! Спробуйте ще раз.");
            return 0;
        }
        work.name= newData.name;
        work.description= newData.description;
      dispatch(editWork(work));
      changeStatus();
    }

    const changeStatus = () => {
      setEdit(!edit)
        console.log(edit)
    }

    return (
        <div className={styles.work}>
            { edit ?(
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <TextField name={"name"} label="Work name"  onChange={handleChange}/>
                        <TextField name={"description"}label={"Work description"} onChange={handleChange}/>
                    </CardContent>
                    <CardActions>
                        <Button size="small"onClick={()=>updateWork()}>
                            Save
                        </Button>
                        <Button size="small" onClick={()=>changeStatus()}>
                            Cancel
                        </Button>
                    </CardActions>
                </Card>
            ):(
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {work.name}
                    </Typography>
                    <Typography variant="body2">
                        {work.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"  onClick={()=>changeStatus()}>
                        Edit
                    </Button>
                    <Button size="small" onClick={()=>removeWork()}>
                        Delete
                    </Button>
                </CardActions>
            </Card>)}
        </div>
    )
}

export default Work;