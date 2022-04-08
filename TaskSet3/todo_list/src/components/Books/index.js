import "./Books.css";
import React from "react";
import {Book} from "../index";

const Books = (props) => {


  return(
    <div >
      {props.data.map((books)=>{
        return (<Book
            key={books.id}
            author={books.author}
            name={books.name}
            description={books.description}
            wrote ={books.wrote}
            onDeleteItem={props.onDeleteItem}
            onChangeStatus={props.onChangeStatus}
            item ={books}
            id ={books.id}
        />
        );
      })}
    </div>
  );
}

export default Books;