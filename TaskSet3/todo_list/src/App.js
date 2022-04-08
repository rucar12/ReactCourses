import './App.css';
import {Books, Fields} from "./components";
import BOOKS_LIST from "./data/books.json";

import {useState} from "react";

const App = () => {

    const [bookItem, setBookItem] = useState(BOOKS_LIST);
    const deleteItem = (id) =>{
        setBookItem(bookItem.filter((book)=>book.id !== id));
    };
    const changeStatus = (id) =>{
        setBookItem(bookItem.filter(el =>{
            if (el.id === id){
                el.wrote = !el.wrote;
            }
            return el;
        }))
    }
    const deleteAll = () => {
      setBookItem(bookItem.splice(bookItem.length,0));
    }

  return (
    <div className="container">
        <div className={"header"}>
            <h1>Book List</h1>
        </div>
        <div>
            <Fields onDeleteAll={deleteAll} item={bookItem} setItem={setBookItem} />
        </div>
        <div>
            {bookItem.length ===0 ? <h1 className={"emptyList"}>HEEEEEEEEEEEEEEEEY <br/> WTF ARE U DOING?!</h1> : <Books data={bookItem} onDeleteItem={deleteItem} onChangeStatus={changeStatus}/>}
        </div>
    </div>
  );
};

export default App;
