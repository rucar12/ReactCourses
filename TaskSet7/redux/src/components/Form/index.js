import styles from "./Form.module.scss";
import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addWork} from "../../store/actions/actions";


const Form = () => {
    const dispatch = useDispatch();
    const [allValue, setAllValue] = useState({name:'', description:""});

    const handleChange = e => {
        const { name, value } = e.target;
        setAllValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const addBook = (event) =>{
        event.preventDefault();
        if (allValue.name==='' || allValue.description===''){
            alert("Заповніть всі поля!");
            return 0;
        }
        const newWork = {
                id: Math.random()*100000000000,
                name: allValue.name,
                description: allValue.description,
                done: false
            }
        dispatch(addWork(newWork));

        setAllValue(prevState => ({
            ...prevState,
            name: "",
            description: ""
        }))
    }
    return(
        <div className={styles.form}>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField name={"name"} id="standard-basic" label="Work..." variant="standard" onChange={handleChange}/>
                <TextField name={"description"} id="standard-basic" label="Description" variant="standard" onChange={handleChange}/>
                <br/>
                <Button style={{maxWidth:"10vw"}} variant={"contained"} onClick={addBook}>ADD</Button>

            </Box>


        </div>
    )

}

export default Form;