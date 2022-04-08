import "./Fields.css";
import React, {useState} from "react";
import { Input } from 'antd';
import {Filters} from "../index";

const { TextArea } = Input;

const Fields = ({onDeleteAll, item, setItem}) => {

        const [allValue, setAllValue] = useState({name:'', description:"", author:""});
        const handleChange = e => {
            const { name, value } = e.target;
            setAllValue(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
        const addBook = () =>{

        if (allValue===undefined || allValue==="" || allValue===" "){
            return 0;
        }
        setItem(
            [...item, {
                id: Math.random()*100000000000,
                name: allValue.name,
                description: allValue.description,
                author: allValue.author,
                wrote: false
            }]
        )
        allValue.name ="";
        allValue.author ="";
        allValue.description ="";
    }

return(
    <>
        <form className={"fields"} onSubmit={(el)=>{
            el.preventDefault();
            addBook();
        }} >
            <div className={"fields-col1"}>
                    <Input required  maxLength={20} className={"fields-input-names"} name={"name"} placeholder="Write book name " value={allValue.name} onChange={handleChange} />
                    <br />
                    <br />
                    <Input required minLength={10} maxLength={20} name={"author"} className={"fields-input-names"}placeholder="Write author" value={allValue.author} onChange={handleChange}  />
            </div>
            <div className={"fields-col2"}>
                    <TextArea required  rows={4}  maxLength={80} name={"description"} className={"fields-input-description"}  placeholder="Field for description" value={allValue.description} onChange={handleChange}  />
            </div >
            <div className={"fields-col3"}>
                    <input type={"submit"} className={"button-addNew"} value={"Add new book"}  />
                    <br/>
                    <button className={"button-deleteAll"} onClick={onDeleteAll}>Delete all books</button>

            </div>
        </form>
        <Filters item={item} setItem={setItem}/>
    </>

);
}

export default Fields;