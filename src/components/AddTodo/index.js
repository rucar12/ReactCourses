import {useState} from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

 const AddTodo = () => {
  const [title, setTitle] =useState("");
  const [description, setDescription] =useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" || description!== "") {
      await addDoc(collection(db, "todos"), {
        title,
        description,
        completed: false,
        createdAt: new Date(),
      });
      setTitle("");
      setDescription("");
    }
  };
  return (
    <form >
      <div className="input_container">
        <input
            style={{border:"none", borderBottom:"1px grey solid"}}
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
            style={{border:"none", borderBottom:"1px grey solid"}}
          type="text"
          placeholder="Add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button onClick={handleSubmit}>Add</button>
      </div>
    </form>
  );
}

export default AddTodo;